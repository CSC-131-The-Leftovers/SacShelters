<template>
    <div>
      <header>
        <nav>
          <li><NuxtLink to="home">Sac Shelters</NuxtLink></li>
          <ul>
           
            <li><NuxtLink to="confirm">Confirm</NuxtLink></li>
            <li><NuxtLink to="login">Login</NuxtLink></li>
            <li><NuxtLink to="testredirect">test redir</NuxtLink></li>
            <li><NuxtLink to="signUp">sign up</NuxtLink></li>
            <li><NuxtLink to="message">Messenger</NuxtLink></li>

          </ul>
  
        </nav>
      </header>
  
      <div>
        <slot />
      </div>
      
    </div>
  </template>

  <style scoped>
    .router-link-exact-active{
        color: #12b488;
    }
    </style>