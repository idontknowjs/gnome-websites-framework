module.exports = function ({ addBase, config }) {
    const typography = {
        'h1': { fontSize: config('theme.fontSize.6xl') },
        'h2': { fontSize: config('theme.fontSize.5xl') },
        'h3': {
            fontSize: config('theme.fontSize.3xl'),
            fontWeight: config('theme.font-light')
        },
        'h4': {
            fontSize: config('theme.fontSize.3xl'),
            fontWeight: config('theme.font-semibold')
        }
    }

    addBase(typography);
}