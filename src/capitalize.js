function capitalizeLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

console.log(capitalizeLetter('foo'));
// export { capitalizeLetter }