console.log(document.cookie);

// document.cookie = 'name=jean'
document.cookie = 'email=frout@frout.com'
const cookies = extractCookies()

function extractCookies() {
    return document.cookie.split('; ').reduce((acc, iteration) => {
        const pair = iteration.split('=')
        acc[pair[0]] = pair[1]
        return acc
    }, {})
}

console.log(cookies);