module.exports={
    development:{
        client:"pg",
        connection:{ filename:'./database/potluck.db3'},
        mirgration:{
            directory:'./database/migrations',
        },
        seeds:{directory:'./database/seeds'}
    }
}