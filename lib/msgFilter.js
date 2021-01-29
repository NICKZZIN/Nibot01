const usedCommandRecently = new Set() // Isso é o anti flood

const isFiltered = (from) => !!usedCommandRecently.has(from)

const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 15000) // Espera 15 segundos antes de rodar outro comando, é util para evitar um belo banimento do WhatsApp, 15000 = 15 segundos, aumente ou diminua se quiser
}

module.exports = {
    isFiltered,
    addFilter
}