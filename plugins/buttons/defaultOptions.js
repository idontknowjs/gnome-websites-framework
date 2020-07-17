const defaultTheme = require('tailwindcss/resolveConfig')(require('tailwindcss/defaultConfig')).defaultTheme

module.exports = {
    padding: '.5rem 1rem',
    borderRadius: '.25rem',
    fontWeight: '600',
    colors: {
        "gnome-blue": {
            background: defaultTheme.colors['gnome-blue-500'],
            text: defaultTheme.colors['white'],
            hover: defaultTheme.colors['gnome-blue-300']
        },
        green: {
            background: defaultTheme.colors['green-500'],
            text: defaultTheme.colors['white'],
            hover: defaultTheme.colors['green-300']
        },
        red: {
            background: defaultTheme.colors['red-500'],
            text: defaultTheme.colors['white'],
            hover: defaultTheme.colors['red-300']
        },
        orange: {
            background: defaultTheme.colors['orange-500'],
            text: defaultTheme.colors['white'],
            hover: defaultTheme.colors['orange-300']
        },
        yellow: {
            background: defaultTheme.colors['yellow-500'],
            text: defaultTheme.colors['black'],
            hover: defaultTheme.colors['yellow-300']
        }
    },
    sizes: {
        sm: {
            fontSize: '.875rem',
            padding: '.5rem .75rem'
        },
        lg: {
            fontSize: '1.25rem',
            padding: '.75rem 1.5rem'
        }
    }
}