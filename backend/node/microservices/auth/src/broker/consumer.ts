import amqp, { Message } from 'amqplib/callback_api'

const createMQConsumer = (gamesAmqpURL: string, paymentsAmqpURL: string, gamesQueueName: string, paymentsQueueName: string) => {

  return () => {
    amqp.connect(gamesAmqpURL, (errConn, conn) => {
      if (errConn) {
        throw errConn
      }

      conn.createChannel((errChan, chan) => {
        if (errChan) {
          throw errChan
        }

        chan.assertQueue(gamesQueueName, { durable: true })

        chan.consume(gamesQueueName, (msg: Message | null) => {
          if (msg) {
            const parsedMessage = JSON.parse(msg.content.toString())
            switch (parsedMessage.type) {
              case 'GAME_INFO':
                console.log('Consuming USER_INFO', parsedMessage.data)
                break
              default:
                break
            }
          }
        }, { noAck: true })
      })
    })

    amqp.connect(paymentsAmqpURL, (errConn, conn) => {
        if (errConn) {
          throw errConn
        }
  
        conn.createChannel((errChan, chan) => {
          if (errChan) {
            throw errChan
          }
  
          chan.assertQueue(paymentsQueueName, { durable: true })
  
          chan.consume(paymentsQueueName, (msg: Message | null) => {
            if (msg) {
              const parsedMessage = JSON.parse(msg.content.toString())
              switch (parsedMessage.type) {
                case 'PAYMENT_INFO':
                  console.log('Consuming PAYMENT_INFO', parsedMessage.data)
                  break
                default:
                  break
              }
            }
          }, { noAck: true })
        })
      })
  }
}

export default createMQConsumer;