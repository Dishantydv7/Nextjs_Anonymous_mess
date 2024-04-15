import mongoose from "mongoose";

type connectionObject = {
    isConnected? : number ; 
}

const connection : connectionObject  = {}
// here void i am not caring about the return type , does not mean i am not returning anything
async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("already connected");
        return 
    }

    try {
      const db =  await mongoose.connect(process.env.MONGODB_URI || '' , {})
      connection.isConnected = db.connections[0].readyState 
    } catch (error) {
        console.log(error);
        
        process.exit(1)
    }
}

export default dbConnect