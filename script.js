document.addEventListener('DOMContentLoaded', () => {
    const redesSociais = [
        { 'facebook': [24, 24] },
        { 'youtube': [24, 24] },
        { 'instagram': [19, 19] },
        { 'twitter': [18, 18] }
    ]

    for (let rede of redesSociais) {
        const site = Object.keys(rede)
        const [width, height] = rede[site]
        
        document.getElementById(site).style.width = `${width}px`
        document.getElementById(site).style.height = `${height}px`
    }
})