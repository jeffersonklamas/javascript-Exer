// Arrow Function test

const what_time_is_it = () => {
    const timeNow = new Date().getHours()
    if (timeNow <= 12) return `Bom dia, a hora atual é ${timeNow}h`
    if (timeNow <= 18) return `Boa tarde, a hora atual é ${timeNow}h`
    return `Boa noite, a hora atual é ${timeNow}h`
}
console.log(what_time_is_it())

