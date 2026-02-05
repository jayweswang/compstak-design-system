/**
 * Design System Token Utilities
 * 
 * This file provides utilities to access design tokens from the design system.
 * It references tokens from:
 * - components.tokens.json (primary)
 * - components-temp.tokens.json (fallback)
 * - semantics.colors.json
 * - semantics.typography.json
 * - semantics.layout.json
 * - primitives.*.json
 */

// Import design tokens
import componentsTokens from '../../.specs/features/design-system/tokens/components.tokens.json';
import tempTokens from '../../.specs/features/design-system/tokens/components-temp.tokens.json';
import semanticsColors from '../../.specs/features/design-system/tokens/semantics.colors.json';
import primitivesColors from '../../.specs/features/design-system/tokens/primitives.colors.json';
import primitivesSpacing from '../../.specs/features/design-system/tokens/primitives.spacing.json';

// Button tokens
export const buttonTokens = {
  // Get button background color for intent and state
  getBackground: (intent: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'cancel', state: 'default' | 'hovered' | 'pressed' | 'disabled' = 'default') => {
    // Direct access to token structure
    const token = (componentsTokens.components as any)?.button?.variant?.intent?.[intent]?.container?.background?.[state] ||
                  (tempTokens.components as any)?.button?.variant?.intent?.[intent]?.container?.background?.[state];
    return resolveColorToken(token || '');
  },
  
  // Get button text color
  getTextColor: (intent: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'cancel', state: 'default' | 'disabled' = 'default') => {
    // Direct access to token structure
    const token = (componentsTokens.components as any)?.button?.variant?.intent?.[intent]?.content?.text?.[state] ||
                  (tempTokens.components as any)?.button?.variant?.intent?.[intent]?.content?.text?.[state];
    return resolveColorToken(token || '');
  },
  
  // Get button size tokens
  getSize: (size: 'small' | 'default' | 'large') => {
    const sizeData = componentsTokens.components?.button?.size?.[size === 'default' ? 'default' : size] || 
                     tempTokens.components?.button?.size?.[size === 'default' ? 'default' : size];
    return sizeData;
  },
};

// Input tokens
export const inputTokens = {
  getContainer: () => {
    return componentsTokens.components?.input?.container || tempTokens.components?.input?.container;
  },
  
  getState: (state: 'default' | 'hovered' | 'selected' | 'disabled' | 'error') => {
    return componentsTokens.components?.input?.state?.[state] || tempTokens.components?.input?.state?.[state];
  },
  
  getField: (type: 'value' | 'placeholder' | 'error') => {
    return componentsTokens.components?.input?.field?.[type] || tempTokens.components?.input?.field?.[type];
  },
};

// Search Input tokens (references input)
export const searchInputTokens = {
  getContainer: () => inputTokens.getContainer(),
  getState: (state: 'default' | 'hovered' | 'selected' | 'disabled' | 'error') => inputTokens.getState(state),
  getField: (type: 'value' | 'placeholder' | 'error') => inputTokens.getField(type),
  getLeadingIcon: () => {
    return (componentsTokens.components as any)?.['search-input']?.adornment?.leading?.icon || 
           (tempTokens.components as any)?.['search-input']?.adornment?.leading?.icon;
  },
};

// Resolve color token to actual color value
function resolveColorToken(token: string): string {
  if (!token) return '';
  
  // If it's a direct hex/rgb, return as-is
  if (token.startsWith('#')) return token;
  if (token.startsWith('rgb') || token.startsWith('rgba')) return token;
  
  // Resolve semantic color tokens
  const parts = token.split('/');
  
  // Handle semantic colors (e.g., "action/primary/default")
  if (parts[0] === 'action' || parts[0] === 'content' || parts[0] === 'status' || parts[0] === 'surface' || parts[0] === 'accent') {
    let value: any = semanticsColors.tokens;
    for (const part of parts) {
      if (value && typeof value === 'object' && part in value) {
        value = value[part];
      } else {
        break;
      }
    }
    
    if (typeof value === 'string') {
      // If it's another token reference, resolve recursively (max depth 5 to prevent infinite loops)
      if (value.includes('/') && !value.startsWith('#') && !value.startsWith('rgb')) {
        return resolveColorToken(value);
      }
      return value;
    }
  }
  
  // Handle primitive colors (e.g., "blue/500")
  if (primitivesColors.tokens && parts[0] && parts[1]) {
    const colorFamily = (primitivesColors.tokens as any)[parts[0]];
    if (colorFamily && typeof colorFamily === 'object') {
      const shade = colorFamily[parts[1]];
      if (shade && typeof shade === 'string') {
        return shade;
      }
    }
  }
  
  // Handle neutral colors (e.g., "neutral/0")
  if (parts[0] === 'neutral' && primitivesColors.tokens?.neutral && parts[1]) {
    const shade = (primitivesColors.tokens.neutral as any)[parts[1]];
    if (shade && typeof shade === 'string') {
      return shade;
    }
  }
  
  return token; // Return original if can't resolve
}

// Resolve spacing token
function resolveSpacingToken(token: string): string {
  if (!token) return '';
  
  // If it's already a rem/px value, return as-is
  if (token.includes('rem') || token.includes('px')) return token;
  
  // Handle space tokens (e.g., "space/4")
  if (token.startsWith('space/')) {
    const spaceValue = token.split('/')[1];
    const space = primitivesSpacing.tokens?.space?.[spaceValue as keyof typeof primitivesSpacing.tokens.space];
    if (space) return space;
  }
  
  return token;
}

// Space type colors (needs to be added to design system)
export const spaceTypeColors = {
  Office: {
    primary: '#2563eb', // blue-600
    background: '#dbeafe', // blue-100
    text: '#1e40af', // blue-700
  },
  Retail: {
    primary: '#16a34a', // green-600
    background: '#dcfce7', // green-100
    text: '#15803d', // green-700
  },
  Industrial: {
    primary: '#ea580c', // orange-600
    background: '#ffedd5', // orange-100
    text: '#c2410c', // orange-700
  },
};

// Brand colors (needs mapping to design system)
export const brandColors = {
  compstak: {
    DEFAULT: '#2563eb', // Maps to blue/500
    400: '#60a5fa',
    700: '#1d4ed8',
  },
  columbia: {
    DEFAULT: '#1e4d8c',
    light: '#4a90d9',
  },
};

// Link tokens
export const linkTokens = {
  // Get link color for state
  getColor: (state: 'default' | 'hovered' | 'pressed' = 'default') => {
    const token = `action/primary/${state}`;
    return resolveColorToken(token);
  },
  
  // Get link className for Tailwind based on design system
  // Styled like ghost buttons - no underline, uses action/primary colors
  // variant: 'default' for light backgrounds, 'on-dark' for dark backgrounds
  // padded: true adds padding for button-like links, false for inline text links
  getClassName: (variant: 'default' | 'on-dark' = 'default', padded: boolean = false) => {
    // action/primary/default = blue/500, action/primary/hovered = blue/600
    // Ghost button style: no underline, hover background
    const padding = padded ? 'px-2 py-1' : '';
    if (variant === 'on-dark') {
      // For dark backgrounds, use lighter colors with hover background
      return `font-medium text-blue-400 hover:text-blue-300 hover:bg-white/10 ${padding} rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors`;
    }
    return `font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 ${padding} rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`;
  },
};

// Export token resolution utilities
export { resolveColorToken, resolveSpacingToken };

