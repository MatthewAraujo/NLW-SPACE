import { FastifyInstance } from 'fastify'
import axios from 'axios'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function uploadRoute(app: FastifyInstance) {
  app.post('/upload',async (request,reply)=> {

    const upload = await request.file({
      limits: {
        fileSize: 5_242_880, // 5MB
      },
    });
    if(!upload){
      return reply.status(400).send()
    }

    const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/
    const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)

    if(!isValidFileFormat){
      return reply.status(400).send()
    }

  
  })

}