import React from 'react'
import App from 'next/app'
import Head from 'next/head'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <div>
        <style jsx global>{`
          body {
            font-family: sans-serif;
          }
        `}</style>
        <div style={styles.header}>My App</div>
        <div style={styles.navbar}>
          <div style={styles.nav}>SHOES</div>
          <div style={styles.nav}>DRESSES</div>
          <div style={styles.nav}>HATS</div>
          <div style={styles.nav}>SHIRTS</div>
          <div style={styles.nav}>PANTS</div>
        </div>
        <Component {...pageProps} />
      </div>
    )
  }
}

const styles = {
  header: {
    textAlign: 'center',
    fontSize: '24px',
    padding: '20px'
  },
  navbar: {
    overflowX: 'auto',
    display: 'flex'
  },
  nav: {
    padding: '30px 15px'
  }
}
