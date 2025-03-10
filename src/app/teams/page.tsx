import React, { Suspense } from 'react'
import Teams from './_components/Teams'
import GetTeams from './api/GetTeams';
import TeamsSkeleton from './_components/TeamsSkeleton';

const page =  () => {
  // const page = async () => {
  //   const teamm = await GetTeams();
    
  return (
    <main>
        <Suspense fallback={<TeamsSkeleton />}>
        <Teams title="Contact" />
        </Suspense>
    </main>
  )
}

export default page