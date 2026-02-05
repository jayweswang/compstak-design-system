/**
 * Input Design System — Figma Plugin
 * Creates variables, text styles, and an Input component with variants from design tokens.
 */

const INPUT_WIDTH = 320;
const MIN_HEIGHT = 40;
const PADDING_X = 16;
const PADDING_Y = 10;
const RADIUS = 4;
const LABEL_GAP = 4;

// Primitives from tokens (hex -> RGB 0–1)
function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return {
    r: ((n >> 16) & 255) / 255,
    g: ((n >> 8) & 255) / 255,
    b: (n & 255) / 255
  };
}

const colors = {
  'neutral/0': '#FFFFFF',
  'neutral/20': '#F4F5F7',
  'neutral/50': '#C1C7D0',
  'neutral/70': '#A8B0BE',
  'neutral/600': '#303441',
  'blue/10': '#F2F8FF',
  'blue/20': '#EBF4FF',
  'blue/800': '#135294',
  'red/5': '#FCF4F2',
  'red/500': '#BF2600'
};

function createVariableCollection() {
  const collection = figma.variables.createVariableCollection('Input / Design Tokens');
  const modeId = collection.defaultModeId;

  const vars = {};

  // Color variables (input states)
  const colorVarNames = [
    ['input/bg/default', 'neutral/0'],
    ['input/bg/hover', 'blue/10'],
    ['input/bg/focus', 'blue/20'],
    ['input/bg/error', 'red/5'],
    ['input/bg/disabled', 'neutral/20'],
    ['input/border/default', 'neutral/50'],
    ['input/border/focus', 'blue/800'],
    ['input/border/error', 'red/500'],
    ['input/text', 'neutral/600'],
    ['input/placeholder', 'neutral/70'],
    ['input/helper', 'neutral/70']
  ];

  colorVarNames.forEach(([name, hex]) => {
    const v = figma.variables.createVariable(name, collection, 'COLOR');
    v.setValueForMode(modeId, hexToRgb(colors[hex] || colors['neutral/600']));
    vars[name] = v;
  });

  return { collection, modeId, vars };
}

// Use only Inter (built into Figma) to avoid hangs from missing/slow fonts
async function loadFonts() {
  const font = { family: 'Inter', style: 'Regular' };
  await figma.loadFontAsync(font);
  return { regular: font, bold: font, medium: font };
}

function createFigmaTextStyles(font) {
  const styles = {};
  const neutral = hexToRgb(colors['neutral/600']);
  const tertiary = hexToRgb(colors['neutral/70']);
  for (const [name, size] of [
    ['Input / Value', 14],
    ['Input / Placeholder', 14],
    ['Input / Label', 12],
    ['Input / Helper', 12]
  ]) {
    const s = figma.createTextStyle();
    s.name = name;
    s.fontName = font;
    s.fontSize = size;
    s.fills = [{ type: 'SOLID', color: name.includes('Placeholder') || name.includes('Helper') ? tertiary : neutral }];
    styles[name] = s;
  }
  return styles;
}

async function createTextNode(fonts, characters, fontSize, colorRgb, weight) {
  const text = figma.createText();
  const fontName = weight === 'Bold' ? fonts.bold : weight === 'Medium' ? fonts.medium : fonts.regular;
  await text.setAsyncFontName(fontName);
  text.fontSize = fontSize;
  text.characters = characters;
  text.fills = [{ type: 'SOLID', color: colorRgb }];
  return text;
}

async function createDemoPages(componentSet, fonts) {
  const neutral = hexToRgb(colors['neutral/600']);
  const tertiary = hexToRgb(colors['neutral/70']);
  const stateOrder = ['Default', 'Hover', 'Focus', 'Error', 'Disabled'];
  const stateDescriptions = {
    Default: 'Resting state. Use for empty or filled fields.',
    Hover: 'Pointer over the field. Optional for desktop.',
    Focus: 'Field has keyboard focus. Use for accessibility.',
    Error: 'Validation failed. Pair with helper text.',
    Disabled: 'Not editable. Use when the field doesn’t apply.'
  };

  // ---- Page 1: Input / States ----
  const statesPage = figma.createPage();
  statesPage.name = 'Input / States';
  figma.root.appendChild(statesPage);

  const statesFrame = figma.createFrame();
  statesFrame.name = 'States';
  statesFrame.layoutMode = 'VERTICAL';
  statesFrame.primaryAxisSizingMode = 'AUTO';
  statesFrame.counterAxisSizingMode = 'AUTO';
  statesFrame.itemSpacing = 32;
  statesFrame.paddingTop = 40;
  statesFrame.paddingBottom = 40;
  statesFrame.paddingLeft = 40;
  statesFrame.paddingRight = 40;
  statesFrame.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.98, b: 0.99 } }];
  statesFrame.cornerRadius = 8;
  statesFrame.x = 40;
  statesFrame.y = 40;

  const statesTitle = await createTextNode(fonts, 'Input states', 24, neutral, 'Bold');
  statesFrame.appendChild(statesTitle);

  const statesSub = await createTextNode(font, 'Each state maps to a variant. Change the State property on the instance to switch.', 14, tertiary);
  statesFrame.appendChild(statesSub);

  for (const state of stateOrder) {
    const row = figma.createFrame();
    row.name = state;
    row.layoutMode = 'HORIZONTAL';
    row.primaryAxisSizingMode = 'AUTO';
    row.counterAxisSizingMode = 'AUTO';
    row.itemSpacing = 24;
    row.counterAxisAlignItems = 'CENTER';

    const labelCol = figma.createFrame();
    labelCol.name = 'label';
    labelCol.layoutMode = 'VERTICAL';
    labelCol.primaryAxisSizingMode = 'AUTO';
    labelCol.counterAxisSizingMode = 'AUTO';
    labelCol.itemSpacing = 4;
    labelCol.resize(160, 50);

    const labelText = await createTextNode(fonts, state, 14, neutral, 'Medium');
    labelCol.appendChild(labelText);
    const descText = await createTextNode(fonts, stateDescriptions[state] || '', 12, tertiary);
    labelCol.appendChild(descText);
    row.appendChild(labelCol);

    const inst = componentSet.createInstance();
    inst.name = state;
    inst.variantProperties = { State: state };
    row.appendChild(inst);

    statesFrame.appendChild(row);
  }
  statesPage.appendChild(statesFrame);

  // ---- Page 2: Input / Variants ----
  const variantsPage = figma.createPage();
  variantsPage.name = 'Input / Variants';
  figma.root.appendChild(variantsPage);

  const variantsFrame = figma.createFrame();
  variantsFrame.name = 'Variants overview';
  variantsFrame.layoutMode = 'VERTICAL';
  variantsFrame.primaryAxisSizingMode = 'AUTO';
  variantsFrame.counterAxisSizingMode = 'AUTO';
  variantsFrame.itemSpacing = 20;
  variantsFrame.paddingTop = 40;
  variantsFrame.paddingBottom = 40;
  variantsFrame.paddingLeft = 40;
  variantsFrame.paddingRight = 40;
  variantsFrame.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.98, b: 0.99 } }];
  variantsFrame.cornerRadius = 8;
  variantsFrame.x = 40;
  variantsFrame.y = 40;

  const varTitle = await createTextNode(fonts, 'Input variants', 24, neutral, 'Bold');
  variantsFrame.appendChild(varTitle);
  const varSub = await createTextNode(font, 'One component, one property: State. Select an instance and change State in the right panel to see how it works.', 14, tertiary);
  variantsFrame.appendChild(varSub);

  const variantsRow = figma.createFrame();
  variantsRow.name = 'All variants';
  variantsRow.layoutMode = 'VERTICAL';
  variantsRow.primaryAxisSizingMode = 'AUTO';
  variantsRow.counterAxisSizingMode = 'AUTO';
  variantsRow.itemSpacing = 12;
  variantsRow.fills = [];

  stateOrder.forEach((state) => {
    const inst = componentSet.createInstance();
    inst.name = `Input · ${state}`;
    inst.variantProperties = { State: state };
    variantsRow.appendChild(inst);
  });
  variantsFrame.appendChild(variantsRow);
  variantsPage.appendChild(variantsFrame);

  // ---- Page 3: Input / Demo ----
  const demoPage = figma.createPage();
  demoPage.name = 'Input / Demo';
  figma.root.appendChild(demoPage);

  const demoFrame = figma.createFrame();
  demoFrame.name = 'Form demo';
  demoFrame.layoutMode = 'VERTICAL';
  demoFrame.primaryAxisSizingMode = 'AUTO';
  demoFrame.counterAxisSizingMode = 'AUTO';
  demoFrame.itemSpacing = 24;
  demoFrame.paddingTop = 40;
  demoFrame.paddingBottom = 40;
  demoFrame.paddingLeft = 40;
  demoFrame.paddingRight = 40;
  demoFrame.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.98, b: 0.99 } }];
  demoFrame.cornerRadius = 8;
  demoFrame.x = 40;
  demoFrame.y = 40;

  const demTitle = await createTextNode(fonts, 'How the component works', 24, neutral, 'Bold');
  demoFrame.appendChild(demTitle);
  const demSub = await createTextNode(fonts, 'Example form using the Input component in different states.', 14, tertiary);
  demoFrame.appendChild(demSub);

  const form = figma.createFrame();
  form.name = 'Form';
  form.layoutMode = 'VERTICAL';
  form.primaryAxisSizingMode = 'AUTO';
  form.counterAxisSizingMode = 'AUTO';
  form.itemSpacing = 16;
  form.resize(360, 280);

  const fields = [
    { label: 'Email', state: 'Default' },
    { label: 'Password', state: 'Default' },
    { label: 'Confirm password', state: 'Error' },
    { label: 'Read-only', state: 'Disabled' }
  ];

  for (const { label, state } of fields) {
    const fieldRow = figma.createFrame();
    fieldRow.name = label;
    fieldRow.layoutMode = 'VERTICAL';
    fieldRow.primaryAxisSizingMode = 'AUTO';
    fieldRow.counterAxisSizingMode = 'AUTO';
    fieldRow.itemSpacing = 6;
    fieldRow.fills = [];

    const labelText = await createTextNode(fonts, label, 12, neutral, 'Medium');
    fieldRow.appendChild(labelText);
    const inst = componentSet.createInstance();
    inst.name = label;
    inst.variantProperties = { State: state };
    fieldRow.appendChild(inst);
    form.appendChild(fieldRow);
  }

  demoFrame.appendChild(form);
  demoPage.appendChild(demoFrame);
}

async function createInputComponentSet(vars, modeId, font) {
  const states = [
    {
      state: 'Default',
      bgVar: vars['input/bg/default'],
      borderVar: vars['input/border/default'],
      textVar: vars['input/text']
    },
    {
      state: 'Hover',
      bgVar: vars['input/bg/hover'],
      borderVar: vars['input/border/default'],
      textVar: vars['input/text']
    },
    {
      state: 'Focus',
      bgVar: vars['input/bg/focus'],
      borderVar: vars['input/border/focus'],
      textVar: vars['input/text']
    },
    {
      state: 'Error',
      bgVar: vars['input/bg/error'],
      borderVar: vars['input/border/error'],
      textVar: vars['input/border/error']
    },
    {
      state: 'Disabled',
      bgVar: vars['input/bg/disabled'],
      borderVar: vars['input/border/default'],
      textVar: vars['input/placeholder']
    }
  ];

  const components = [];

  const textY = (MIN_HEIGHT - 14 * 1.25) / 2;

  for (const { state, bgVar, borderVar, textVar } of states) {
    const comp = figma.createComponent();
    comp.name = `Input/${state}`;
    comp.resize(INPUT_WIDTH, MIN_HEIGHT);
    comp.fills = [];
    comp.cornerRadius = RADIUS;
    comp.strokeWeight = 1;
    comp.strokeAlign = 'INSIDE';

    const bgComp = figma.createRectangle();
    bgComp.name = 'background';
    bgComp.resize(INPUT_WIDTH, MIN_HEIGHT);
    bgComp.cornerRadius = RADIUS;
    bgComp.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    bgComp.strokes = [{ type: 'SOLID', color: { r: 0.76, g: 0.78, b: 0.82 } }];
    comp.appendChild(bgComp);
    try {
      if (bgComp.fills && bgComp.fills.length > 0) {
        bgComp.fills = [figma.variables.setBoundVariableForPaint(bgComp.fills[0], 'color', bgVar)];
      }
      if (bgComp.strokes && bgComp.strokes.length > 0) {
        bgComp.strokes = [figma.variables.setBoundVariableForPaint(bgComp.strokes[0], 'color', borderVar)];
      }
    } catch (e) {
      console.error('[Plugin] Error binding variables to bg:', e, 'bgVar:', bgVar && bgVar.id, 'borderVar:', borderVar && borderVar.id);
      throw new Error('Failed to bind variables: ' + e.message);
    }

    const textComp = figma.createText();
    textComp.name = 'value';
    await textComp.setAsyncFontName(font);
    textComp.fontSize = 14;
    textComp.characters = state === 'Disabled' ? 'Disabled' : 'Placeholder';
    textComp.x = PADDING_X;
    textComp.y = textY;
    textComp.fills = [{ type: 'SOLID', color: hexToRgb(colors['neutral/600']) }];
    comp.appendChild(textComp);
    try {
      if (textComp.fills && textComp.fills.length > 0) {
        textComp.fills = [figma.variables.setBoundVariableForPaint(textComp.fills[0], 'color', textVar)];
      }
    } catch (e) {
      console.error('[Plugin] Error binding variable to text:', e, 'textVar:', textVar && textVar.id);
      throw new Error('Failed to bind text variable: ' + e.message);
    }

    comp.variantProperties = { State: state };
    components.push(comp);
  }

  const componentSet = figma.combineAsVariants(components);
  componentSet.name = 'Input';
  return componentSet;
}

async function run(withDemoPages) {
  const timeoutMs = withDemoPages ? 25000 : 10000;
  const runPromise = (async () => {
    try {
      figma.ui.postMessage({ type: 'progress', step: 'Loading fonts…' });
      console.log('[Plugin] Starting...');
      const fonts = await loadFonts();
      console.log('[Plugin] Fonts loaded:', fonts);
      
      figma.ui.postMessage({ type: 'progress', step: 'Creating variables…' });
      const { collection, modeId, vars } = createVariableCollection();
      console.log('[Plugin] Variables created:', Object.keys(vars).length);
      
      figma.ui.postMessage({ type: 'progress', step: 'Creating text styles…' });
      const textStyles = createFigmaTextStyles(fonts.regular);
      console.log('[Plugin] Text styles created:', Object.keys(textStyles).length);
      
      figma.ui.postMessage({ type: 'progress', step: 'Creating Input component…' });
      const componentSet = await createInputComponentSet(vars, modeId, fonts.regular);
      console.log('[Plugin] Component set created:', componentSet.name);

      // ---- Page 0: Input / Library (component set lives here) ----
      figma.ui.postMessage({ type: 'progress', step: 'Creating Library page…' });
    const libraryPage = figma.createPage();
    libraryPage.name = 'Input / Library';
    figma.root.appendChild(libraryPage);

    const wrap = figma.createFrame();
    wrap.name = 'Input · Component set';
    wrap.layoutMode = 'VERTICAL';
    wrap.primaryAxisSizingMode = 'AUTO';
    wrap.counterAxisSizingMode = 'AUTO';
    wrap.itemSpacing = 24;
    wrap.paddingTop = 24;
    wrap.paddingBottom = 24;
    wrap.paddingLeft = 24;
    wrap.paddingRight = 24;
    wrap.fills = [{ type: 'SOLID', color: { r: 0.97, g: 0.97, b: 0.98 } }];
    wrap.cornerRadius = 8;
    wrap.x = 40;
    wrap.y = 40;

    const title = await createTextNode(fonts, 'Input · Component set', 18, hexToRgb(colors['neutral/600']), 'Bold');
    wrap.appendChild(title);
    const sub = await createTextNode(fonts, 'Drag this component into your designs. Use the State property to switch variants.', 14, hexToRgb(colors['neutral/70']));
    wrap.appendChild(sub);

    libraryPage.appendChild(componentSet);
    componentSet.x = 40;
    componentSet.y = 140;

    const row = figma.createFrame();
    row.name = 'All variants';
    row.layoutMode = 'VERTICAL';
    row.primaryAxisSizingMode = 'AUTO';
    row.counterAxisSizingMode = 'AUTO';
    row.itemSpacing = 12;
    row.fills = [];
    row.x = 40;
    row.y = 520;

    const stateOrder = ['Default', 'Hover', 'Focus', 'Error', 'Disabled'];
    stateOrder.forEach((state) => {
      const inst = componentSet.createInstance();
      inst.name = `Input ${state}`;
      inst.variantProperties = { State: state };
      row.appendChild(inst);
    });

    wrap.resize(400, 120);
    libraryPage.appendChild(wrap);
    libraryPage.appendChild(row);

    // ---- Demo pages (optional) ----
    if (withDemoPages) {
      figma.ui.postMessage({ type: 'progress', step: 'Creating demo pages…' });
      await createDemoPages(componentSet, fonts);
    }

    figma.currentPage = libraryPage;
    figma.currentPage.selection = [componentSet];
    figma.viewport.scrollAndZoomIntoView([componentSet]);

    figma.ui.postMessage({ type: 'done' });
    figma.notify(withDemoPages ? 'Done: Library, States, Variants, Demo + variables & text styles.' : 'Done: Library + variables & text styles.');
    console.log('[Plugin] Success!');
    } catch (e) {
      console.error('[Plugin] Error:', e);
      console.error('[Plugin] Stack:', e.stack);
      figma.ui.postMessage({ type: 'error', message: e.message || String(e) });
      figma.notify('Error: ' + (e.message || String(e)), { error: true });
    }
  })();

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Plugin timed out after ' + timeoutMs / 1000 + 's. Try closing and rerunning.')), timeoutMs)
  );

  try {
    await Promise.race([runPromise, timeoutPromise]);
    console.log('[Plugin] Run completed');
  } catch (e) {
    console.error('[Plugin] Timeout or error:', e);
    figma.ui.postMessage({ type: 'error', message: e.message || String(e) });
    figma.notify(e.message || 'Plugin timed out.', { error: true });
  }
}

figma.ui.onmessage = (msg) => {
  if (msg.type === 'create') {
    run(msg.withDemoPages !== false);
  }
};
