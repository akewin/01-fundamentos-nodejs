export async function json(req, res) {
    // Array para armazenar partes do corpo da requisição (stream)
    const buffers = []

    // Aguarda cada parte do stream da requisição e armazena no array buffers
    for await (const chunk of req) {
        buffers.push(chunk)
    }
    
    // Tenta converter o corpo da requisição para JSON
    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch {
        req.body = null
    }   

    // outro
    res.setHeader('Content-Type', 'application/json')
}