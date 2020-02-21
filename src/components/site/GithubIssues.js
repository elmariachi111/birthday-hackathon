import React, { useEffect, useState } from 'react'
import { Box, Anchor, Text } from 'grommet'

export default function GithubIssues () {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch('https://api.github.com/repos/elmariachi111/birthday-hackathon/issues')
      const json = await res.json()
      console.log(json)
      setIssues(json)
    })()
  }, [])

  return <Box>
    <ul style={{ listStyleType: 'none' }}>
      {issues.map(i => (
        <li key={i.node_id} style={{ marginBottom: '1em' }}>
          <Anchor href={i.html_url} target="_blank" size="large">
            {i.title}
          </Anchor><br />
          {i.labels.map(l => (
            <Text
              style={{ color: `#${l.color}` }}
              margin={{ right: 'small' }}
              size="medium"
              key={`${i.node_id}-${l.id}`}>{l.name}
            </Text>
          ))}
        </li>
      ))}
    </ul>
  </Box>
}
