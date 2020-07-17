module.exports = function ({ addComponents, config }) {
    const buttons = {
        '.btn': {
            padding: '.5rem 1rem',
            borderRadius: '.25rem',
            fontWeight: '600',
            border: '3px solid transparent',
        },
        '.btn-gnome-blue': {
            backgroundColor: '#4295DB',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#98C5EB'
            }
        },
        '.btn-gnome-blue-ghost': {
            backgroundColor: 'transparent',
            borderColor: '#4295DB',
            color: '#4295DB',
            '&:hover': {
                backgroundColor: '#4295DB',
                color: '#fff'
            }
        },
        '.btn-red': {
            backgroundColor: '#FF292B',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#FF8F90'
            }
        },
        '.btn-red-ghost': {
            backgroundColor: 'transparent',
            borderColor: '#FF292B',
            color: '#FF292B',
            '&:hover': {
                backgroundColor: '#FF292B',
                color: '#fff'
            }
        },
        '.btn-orange': {
            backgroundColor: '#F48339',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#F9C09A'
            }
        },
        '.btn-orange-ghost': {
            backgroundColor: 'transparent',
            borderColor: '#F48339',
            color: '#F48339',
            '&:hover': {
                backgroundColor: '#F48339',
                color: '#fff'
            }
        },
        '.btn-yellow': {
            backgroundColor: '#FFB711',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#FFD575'
            }
        },
        '.btn-yellow-ghost': {
            backgroundColor: 'transparent',
            borderColor: '#FFB711',
            color: '#FFB711',
            '&:hover': {
                backgroundColor: '#FFB711',
                color: '#fff'
            }
        },
        '.btn-green': {
            backgroundColor: '#8DD143',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#BEE595'
            }
        },
        '.btn-green-ghost': {
            backgroundColor: 'transparent',
            borderColor: '#8DD143',
            color: '#8DD143',
            '&:hover': {
                backgroundColor: '#8DD143',
                color: '#fff'
            }
        },
    }
    addComponents(buttons);
}