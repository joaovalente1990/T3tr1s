import amqp, { Message } from 'amqplib/callback_api'

const createMQConsumer = (authAmqpURL: string, paymentsAmqpURL: string, authQueueName: string, paymentsQueueName: string) => {

  return () => {
    amqp.connect(authAmqpURL, (errConn, conn) => {
      if (errConn) {
        throw errConn
      }

      conn.createChannel((errChan, chan) => {
        if (errChan) {
          throw errChan
        }

        chan.assertQueue(authQueueName, { durable: true })

        chan.consume(authQueueName, (msg: Message | null) => {
          if (msg) {
            const parsedMessage = JSON.parse(msg.content.toString())
            switch (parsedMessage.type) {
              case 'USER_INFO':
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