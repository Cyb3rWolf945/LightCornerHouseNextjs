"use server"

import { ObjectId } from "mongodb";

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =  "mongodb+srv://lightcornerhouse:LightCornerHouseIsTheBestRoomForYou@cluster.8ulinwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

export async function getRooms(){
  try {
    // filters
    const filter = {};
    const projection = {
      'photos': 0, 
      'comments': 0, 
      'space': 0, 
      'location': 0
    };
    const sort = {};
    const collation = {};

    await client.connect();

    // retrieve houses
    const coll = client.db('test').collection('houses');
    const cursor = coll.find(filter, { projection, sort, collation });
    const result = await cursor.toArray();
    return result;
  } finally {
    await client.close();
  }
}




export async function getRoomByID(id: string) {
  try {
      const filter = {
          '_id': new ObjectId(id)
      };

      await client.connect();

      const coll = client.db('test').collection('houses');
      const room = await coll.findOne(filter);
      return room;
  } finally {
      await client.close();
  }
}
