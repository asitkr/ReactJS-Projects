import React from 'react'

function Tabs({ type, setType }) {
  return (
    <>
        <button className={`${type === "repos" && 'text-teal-400'}`} onClick={() => setType("repos")}>
            Respositories
        </button>

        <button className={`${type === "received_events" && 'text-teal-400'}`} onClick={() => setType("received_events")}>
            Activity
        </button>

        <button className={`${type === "followers" && 'text-teal-400'}`} onClick={() => setType("followers")}>
            Followers
        </button>
    </>
  )
}

export default Tabs;