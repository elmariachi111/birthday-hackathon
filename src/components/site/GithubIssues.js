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

    </ul>
  </Box>
}
