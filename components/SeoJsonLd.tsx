type SchemaInput = Record<string, unknown>

interface SeoJsonLdProps {
  data: SchemaInput | SchemaInput[] | null | undefined
  id?: string
}

export function SeoJsonLd({ data, id }: SeoJsonLdProps) {
  if (!data) return null

  const schemaArray = Array.isArray(data) ? data : [data]

  if (!schemaArray.length) return null

  return (
    <>
      {schemaArray.map((schema, index) => (
        <script
          key={id ? `${id}-${index}` : index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}


