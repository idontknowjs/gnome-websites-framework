module.exports = function () {

    return function ({ addComponents, e }) {
        const buttons = {
            '.btn': {
                padding: '.5rem 1rem',
                borderRadius: '.25rem',
                fontWeight: '600',
                border: '3px solid transparent',
            },
            '.btn-primary': {
                backgroundColor: '#4295DB',
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#98C5EB'
                }
            },
            '.btn-secondary': {
                backgroundColor: 'transparent',
                borderColor: '#F48339',
                color: '#F48339',
                '&:hover': {
                    backgroundColor: '#F48339',
                    color: '#fff'
                }
            }
        }
        addComponents(buttons);
    }
}