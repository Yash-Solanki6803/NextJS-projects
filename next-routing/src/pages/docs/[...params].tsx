import { useRouter } from 'next/router'
import React from 'react'
import {Switch,Case,Default } from '../../utils/SwitchCase'


const Doc = () => {
    const router = useRouter()
    const { params = [] } = router.query

    return (
      <>
      <Switch check={params.length}>
        <Default>
            <h1>Default Page</h1>
        </Default>
        <Case when={1}>
            <h1>Viewing docs for feature {params[0]}</h1>
        </Case>
        <Case when={2}>
            <h1> Viewing docs for feature {params[0]} and concept {params[1]} </h1>
        </Case>
      </Switch>
      </>
  )
}

export default Doc