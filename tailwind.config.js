tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
            'auto' :'repeat(auto-fit, minmax(200px, 1fr))'
        },
        fontFamily :{
            Outfit:["Outfit", "sans-serif"],
            Ovo: ["Ovo", "serif"],
        },
        keyframes: {
            moveDown: {
            '0%': { transform:'translateY(-100px)', opacity: 0} ,
            '100%': { transform: 'translateY(0)', opacity: 1 },
            },
        },
        animation:{
            spin_slow: 'spin 6s linear infinite',
            moveDown: 'moveDown 1s ease-in-out forwards ',
        },
        colors:{
            lightHover: '#fcf4ff',
            darkHover: '#2a004a',
            darkTheme: '#11001F',
        },
        boxShadow:{
            'black': '4px 4px 0 #000',
            'white': '4px 4px 0 #fff',
        }
        }
        
    },
    Plugins: [],
    darkMode: 'selector'
}