import amqp, { Connection } from "amqplib/callback_api";

const createMQProducer = (amqpUrl: string, queueName: string) => {
  let ch: any;

  amqp.connect(amqpUrl, (errorConnect: Error, connection: Connection) => {
    if (errorConnect) {
      throw new Error("Error connecting to RabbitMQ: " + errorConnect);
    }

    connection.createChannel((errorChannel, channel) => {
      if (errorChannel) {
        throw new Error("Error creating channel: " + errorChannel);
      }

      channel.assertQueue(queueName, { durable: true });

      ch = channel;
    });
  });

  return (msg: string) => {
    ch.sendToQueue(queueName, Buffer.from(msg))
  }
};

export default createMQProducer;
