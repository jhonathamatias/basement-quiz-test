import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import Layout from '../../../src/components/templates/Layout'
const Result: NextPage = () => {
  return <Layout>
    <Link href="/">Inicie o jogo</Link>
  </Layout>
}

export default Result;
