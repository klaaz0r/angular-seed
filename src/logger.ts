import * as bunyan from 'browser-bunyan'

const logger = bunyan.createLogger({
    name: 'ActorTempalteApp',
    streams: [
        {
            level: 'trace',
            stream: new bunyan.ConsoleFormattedStream({ logByLevel: true })
        }
    ],
    serializers: bunyan.stdSerializers,
});

export function log(level: string, ...message: string[]): void {
    return logger[level](...message)
}
