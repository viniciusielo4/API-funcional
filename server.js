import fastify from 'fastify'
import cors from "@fastify/cors"
const server = fastify();

server.register(cors, {
    origin: "*",
    methods: ['GET', 'POST']
})

const banco = [
    {
        email: "joaquina@gmail.com",
        senha: "123"
    }
];
server.post("/login", (request) => {
    const usuarioQueVeioDofront = request.body;
    for (const usuarioDoBanco of banco) {
        if (usuarioDoBanco.email === usuarioQueVeioDofront.email
            && usuarioDoBanco.senha === usuarioQueVeioDofront.senha){
              return{
                resposta: "pode entrar"
              }
        }else{
            return {
                resposta: "Não pode entrar"
            }
        }
    }
});
server.get("/login", () => {
    return banco
});

server.listen({
    port: 3333
});