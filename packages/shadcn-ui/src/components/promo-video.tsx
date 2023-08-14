import { AspectRatio } from '..'

export function PromoVideo({ src }: { src: string }) {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="overflow-hidden rounded-lg border bg-white shadow-xl"
    >
      <video autoPlay muted playsInline>
        <source
          src={src}
          type="video/mp4"
        />
      </video>
    </AspectRatio>
  )
}
