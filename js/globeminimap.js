





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-RPWwIpqyjxv5EpuWKUKyeZeWz9QEzIbAWTiYOuxGieUq7+AMiZbsLeQMfEdyEIUoNjLagHK0BEm92BmXnvaH4Q==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-40c1c9d8ff06284fb441108e6559f019.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-zG4e9CsXZtqIqTQjftpGB6uJf0X5RLVl+a7WfELX2vENI02zZ/fnBzlsSB9LGK69GArhrukD7wCT8hIkaZALAg==" rel="stylesheet" href="https://github.githubassets.com/assets/github-c359d7f521f0f6fc702b2aef4bca2ce5.css" />
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>storymap/globeminimap.js at master · jakobzhao/storymap</title>
    <meta name="description" content="A JavaScript library for digital storytelling with web maps.  - jakobzhao/storymap">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/134784?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="jakobzhao/storymap" /><meta property="og:url" content="https://github.com/jakobzhao/storymap" /><meta property="og:description" content="A JavaScript library for digital storytelling with web maps.  - jakobzhao/storymap" />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MzYwNzExNDM0OmJiOGMwYzNlMDAzMjQwNjkxYzg3MzY4ZTE2MzQ4YjIyYjViOTcxYjQ2YzgyZDZiMzg3ZTkwZjFlOTcyZjRkNTE=--16bbf1efb58cb757835a215214021e4fa033b64b">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="D03D:0CD0:295EB4:3E49CE:5C749194" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="D03D:0CD0:295EB4:3E49CE:5C749194" /><meta name="octolytics-dimension-region_edge" content="sea" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="46572789" /><meta name="octolytics-actor-login" content="csbmaps" /><meta name="octolytics-actor-hash" content="1fcf8d4caf1c6413c0adf1f2529d42196c994eaf99dddd8920eb35b479b8192d" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="564731757706d62d816a798ecd7b163e">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="csbmaps">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="ODEwZjZjM2NiYzExMzBkNTcyZDMyY2ExMTNkMDRjZmMyZTVmZThjNDc2Mjc3OWEyOTU4ZGU4ZmM0N2Q0ZmQ5NXx7InJlbW90ZV9hZGRyZXNzIjoiMTI4LjE5My4xNTQuMjA4IiwicmVxdWVzdF9pZCI6IkQwM0Q6MENEMDoyOTVFQjQ6M0U0OUNFOjVDNzQ5MTk0IiwidGltZXN0YW1wIjoxNTUxMTQzMzI2LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="UNIVERSE_BANNER,MARKETPLACE_SOCIAL_PROOF,MARKETPLACE_PLAN_RESTRICTION_EDITOR,NOTIFY_ON_BLOCK,RELATED_ISSUES,MARKETPLACE_BROWSING_V2">

  <meta name="html-safe-nonce" content="8d40de1cc659bd976943446a7fa275a8aad0d8bd">

  <meta http-equiv="x-pjax-version" content="9846f57935906bb1b508bc760b2314d2">
  

      <link href="https://github.com/jakobzhao/storymap/commits/master.atom" rel="alternate" title="Recent Commits to storymap:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/jakobzhao/storymap git https://github.com/jakobzhao/storymap.git">

  <meta name="octolytics-dimension-user_id" content="134784" /><meta name="octolytics-dimension-user_login" content="jakobzhao" /><meta name="octolytics-dimension-repository_id" content="82884041" /><meta name="octolytics-dimension-repository_nwo" content="jakobzhao/storymap" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="82884041" /><meta name="octolytics-dimension-repository_network_root_nwo" content="jakobzhao/storymap" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/jakobzhao/storymap/blob/master/js/globeminimap.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    


        
<header class="Header  f5" role="banner">
  <div class="d-flex flex-justify-between px-3 ">
    <div class="d-flex flex-justify-between ">
      <div class="">
        <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

      </div>

    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <nav class="d-flex" aria-label="Global">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="82884041" data-scoped-search-url="/jakobzhao/storymap/search" data-unscoped-search-url="/search" action="/jakobzhao/storymap/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=0RlgvnxmDBoxBd+oc7E098cB9w/IyHTRhuop6CpZ5NBAWuzRfU1rlTcgc6NQmEOryIg7hCkLkpQXWaKaI3A67g=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none">
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
                Pull requests
</a>            </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
                Issues
</a>            </li>
              <li class="position-relative">
                <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
                   Marketplace
</a>                  
              </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                Explore
</a>            </li>
          </ul>
      </nav>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown">
    <span class="d-inline-block  px-2">
      
    <a aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:46572789" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </span>
  </li>

  <li class="dropdown">
    <details class="details-overlay details-reset d-flex px-2 flex-items-center">
      <summary class="HeaderNavlink"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg class="octicon octicon-plus float-left mr-1 mt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>
      <details-menu class="dropdown-menu dropdown-menu-sw">
        
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="jakobzhao/storymap">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/jakobzhao/storymap/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>


      </details-menu>
    </details>
  </li>

  <li class="dropdown">

    <details class="details-overlay details-reset d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name mt-1"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@csbmaps" class="avatar float-left mr-1" src="https://avatars2.githubusercontent.com/u/46572789?s=40&amp;v=4" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>
      <details-menu class="dropdown-menu dropdown-menu-sw">
        <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/csbmaps" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">csbmaps</strong></a></div>
        <div role="none" class="dropdown-divider"></div>

        <div class="px-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
          
<div class="js-user-status-container user-status-compact" data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link no-underline js-toggle-user-status-edit toggle-user-status-edit width-full" aria-haspopup="dialog" role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:134784,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:46572789,&quot;client_id&quot;:&quot;530814044.1546901909&quot;,&quot;originating_request_id&quot;:&quot;D03D:0CD0:295EB4:3E49CE:5C749194&quot;,&quot;originating_url&quot;:&quot;https://github.com/jakobzhao/storymap/blob/master/js/globeminimap.js&quot;}}" data-hydro-click-hmac="a623b3c707ff4fda8002d43f1db8a2daad5d8924d5b87a0a49508634de1159a5">
      <div class="f6 d-inline-block v-align-middle  user-status-emoji-only-header  circle lh-condensed user-status-header " style="max-width: 29px">
        <div class="user-status-emoji-container flex-shrink-0 mr-1">
          <div><g-emoji class="g-emoji" alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji></div>
        </div>
      </div>
      <div class="d-inline-block v-align-middle user-status-message-wrapper f6 lh-condensed ws-normal pt-1">
            Focusing
      </div>
</summary>    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="mIbNEdXA6ws52VKTMKQCQFmSjLwqwpIIiw0hpyE8WAZfAybrtJhXoCl/DEIekL33wHfpXrFiiVZksUmHZdjXcQ==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value=":dart:">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container js-suggester-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker bg-white btn-open-emoji-picker">
                  <span class="js-user-status-original-emoji" hidden><div><g-emoji class="g-emoji" alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji></div></span>
                  <span class="js-user-status-custom-emoji"><div><g-emoji class="g-emoji" alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji></div></span>
                  <span class="js-user-status-no-emoji-icon" hidden>
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <input type="text" autocomplete="off" autofocus data-maxlength="80" class="js-suggester-field d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field" placeholder="What's happening?" name="message" required value="Focusing" aria-label="What is your current status?">
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div class="suggester-container">
              <div class="suggester js-suggester js-navigation-container" data-url="/autocomplete/user-suggestions" data-no-org-url="/autocomplete/user-suggestions" data-org-url="/suggestions" hidden>
              </div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions" hidden>
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true" id="limited-availability-truncate-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit"  class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button"  class="width-full js-clear-user-status-button btn ml-2 js-user-status-exists">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

        </div>
        <div role="none" class="dropdown-divider"></div>

        <a role="menuitem" class="dropdown-item" href="/csbmaps" data-ga-click="Header, go to profile, text:your profile">Your profile</a>
        <a role="menuitem" class="dropdown-item" href="/csbmaps?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

        <a role="menuitem" class="dropdown-item" href="/csbmaps?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

        <a role="menuitem" class="dropdown-item" href="/csbmaps?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
          <a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your gists</a>

        <div role="none" class="dropdown-divider"></div>
        <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="GCnrxWWkgEna2BwFnnrrQf8+BoXTdKqRpFBol5wwMyH+9iuCecrGbKOKM5rlolHkUHJ46Q8Q0zFNj+8PXlnTQA==" />
          
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
            Sign out
          </button>
</form>      </details-menu>
    </details>
  </li>
</ul>



        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="sr-only right-0" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="o70+m0CjYa5O0eY+qAZf1Jvvvs7nyJdAN+ZvRFL1PdxFYv7cXM0nizeDyaHT3uVxNKPAojus7uDeOejckJzdvQ==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">

</div>



  <div role="main" class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      


  





  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="a/CQ6CgWNwOqEhmqvU0aUsP4pOQF4I2FQnRbVwrYdWR+zpLj29/u5LMuxiAPnaxay302ZSAxo5VdvHSWNyxj7A==" />      <input type="hidden" name="repository_id" id="repository_id" value="82884041" class="form-control" />

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="btn btn-sm btn-with-count select-menu-button" data-ga-click="Repository, click Watch settings, action:blob#show">
          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
          </span>
        </summary>
        <details-menu class="select-menu-modal position-absolute mt-5" style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
      <a class="social-count js-social-count"
        href="/jakobzhao/storymap/watchers"
        aria-label="4 users are watching this repository">
        4
      </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/jakobzhao/storymap/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="tyBYmPJipDLXHCIXpZEv8jrv8fcmr3NzVwcYWRVklKCTCvLQaBLySUaBVHmuoHhDDu8DVpVW63QYx9a9M4UCag==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar jakobzhao/storymap"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/jakobzhao/storymap/stargazers"
           aria-label="55 users starred this repository">
          55
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/jakobzhao/storymap/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="PVhVaVta0GExfKa38Zq0PiUVpp45jdTCrMtzv1jRXzPk2uedNZ7KaORO1+DgZSIMqeEVBGxAJFRuZgzTcWcj5w==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star jakobzhao/storymap"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/jakobzhao/storymap/stargazers"
           aria-label="55 users starred this repository">
          55
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/jakobzhao/storymap/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="ZVh5t35cAFOJmLwgJuZvD/GR/H1XSuDlP0h8hmRxGFvgLVp7SG2jiJy6l+3m/gCV6QBKTGAGN0ZJFf0QfH6VkQ==" />
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of jakobzhao/storymap to your account"
                aria-label="Fork your own copy of jakobzhao/storymap to your account">
              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/jakobzhao/storymap/network/members" class="social-count"
       aria-label="14 users forked this repository">
      14
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=134784" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jakobzhao">jakobzhao</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/jakobzhao/storymap">storymap</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /jakobzhao/storymap" href="/jakobzhao/storymap">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /jakobzhao/storymap/issues" href="/jakobzhao/storymap/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /jakobzhao/storymap/pulls" href="/jakobzhao/storymap/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>





    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse alerts security people /jakobzhao/storymap/pulse" href="/jakobzhao/storymap/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>


  </div>
<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
    



  
    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/jakobzhao/storymap/blob/bfad6189e1d9056e7cbbe964d136413f846aa6ef/js/globeminimap.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:b80eddecda5d207c3a94f7acead85a01 -->

    

    <div class="file-navigation">
      
<details class="details-reset details-overlay select-menu branch-select-menu float-left">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target">master</span>
  </summary>

  <details-menu class="select-menu-modal position-absolute" style="z-index: 99;" src="/jakobzhao/storymap/ref-list/master/js/globeminimap.js?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

      <div class="BtnGroup float-right">
        <a href="/jakobzhao/storymap/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
      <div id="blob-path" class="breadcrumb">
        <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/jakobzhao/storymap"><span>storymap</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/jakobzhao/storymap/tree/master/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">globeminimap.js</strong>
      </div>
    </div>


    
  <div class="commit-tease d-flex flex-column">
      <div class="d-flex flex-justify-between ">
        <span class="pr-md-4">
          <a rel="author" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=134784" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jakobzhao"><img class="avatar" src="https://avatars2.githubusercontent.com/u/134784?s=40&amp;v=4" width="20" height="20" alt="@jakobzhao" /></a>
          <a class="user-mention" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=134784" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/jakobzhao">jakobzhao</a>
            <a data-pjax="true" title="update geojson, etc." class="message" href="/jakobzhao/storymap/commit/d68ad8b2558baa032dd465258417148a1a6450ae">update geojson, etc.</a>
        </span>
        <span class="d-inline-block flex-shrink-0 v-align-bottom ">
          <a class="commit-tease-sha pr-2" href="/jakobzhao/storymap/commit/d68ad8b2558baa032dd465258417148a1a6450ae" data-pjax>
            d68ad8b
          </a>
          <relative-time datetime="2017-10-27T06:45:44Z">Oct 26, 2017</relative-time>
        </span>
      </div>

    <div class="commit-tease-contributors flex-auto">
      
<details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
  <summary
      class="btn-link"
      aria-haspopup="dialog"
      
      
      >
    
    <span><strong>1</strong> contributor</span>
  </summary>
  <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast " aria-label="Users who have contributed to this file">
    <div class="Box-header">
      <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <h3 class="Box-title">Users who have contributed to this file</h3>
    </div>
    
        <ul class="list-style-none overflow-auto">
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/jakobzhao">
                <img class="avatar mr-2" alt="" src="https://avatars2.githubusercontent.com/u/134784?s=40&amp;v=4" width="20" height="20" />
                jakobzhao
</a>            </li>
        </ul>

  </details-dialog>
</details>
      
    </div>
  </div>





    <div class="file ">
      
<div class="file-header ">
  
  <div class="file-info float-left ">
      188 lines (151 sloc)
      <span class="file-info-divider"></span>
    111 KB
  </div>

  <div class="file-actions d-flex ">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/jakobzhao/storymap/raw/master/js/globeminimap.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/jakobzhao/storymap/blame/master/js/globeminimap.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/jakobzhao/storymap/commits/master/js/globeminimap.js">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw "
               href="https://desktop.github.com"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:windows">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/jakobzhao/storymap/edit/master/js/globeminimap.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="wgEdTXaCr1lb8LjDVrLb4PUXzJZu5BigcxBmLGraDel2NXsr5tnYeP+h5MlcHUYoGp6A1igjgMjBHX4dQr2jAg==" />
              <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
                aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
              </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/jakobzhao/storymap/delete/master/js/globeminimap.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="LBc2T76WWhUD5jrgXnwGSKfVhjqJwqtw3vaw6jLOiWDBz05lyvy+IBhoK5LeDQrkWRoGP8yMOE83qpPkpBUYiA==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and delete the file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
            </button>
</form>    </div>
  </div>
</div>

      

  <div itemprop="text" class="blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Following https://github.com/Leaflet/Leaflet/blob/master/PLUGIN-GUIDE.md</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>originally get from https://github.com/chriswhong/leaflet-globeminimap. but did some updates</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> worlddata <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&quot;</span>type<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Topology<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&quot;</span>objects<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>land<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>type<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>MultiPolygon<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">            &quot;arcs&quot;: [[[540, 266, 539], [123, 542, 536], [592, 399, 564, 457, 565, 439, 78, 350, 483, 355, 359, 405, 532, 507, 533, 18, 482, 20, 481, 595, 531, 379, 247, 538, 254, 229, 552, 554, 389, 575, 445, 597, 461, 8, 200, 10, 203, 283, 303, 191, 467, 67, 563, 291, 184, 412, 550, 295, 301, 544, 299, 543, 453, 530, 428, 242, 571, 416, 250, 369, 410, 561, 572, 288, 521, 578, 511, 81, 573, 305, 15, 441, 323, 558, 375, 281, 257, 506, 255, 282, 66, 470, 227, 234, 222, 498, 514, 422, 425, 259, 523, 269, 559, 473, 524, 504, 400, 505, 169], [386, 520, 55, 358, 567]], [[24, 164]], [[556, 275], [579, 28, 165, 486, 245, 206, 484, 211, 468, 317, 551, 309, 433, 586, 139, 590, 141, 585, 432, 98, 311, 319, 469, 213, 485, 208, 591, 314, 555, 277, 111]], [[36]], [[37]], [[38]], [[39]], [[40]], [[41]], [[42]], [[43]], [[44]], [[45]], [[46]], [[86]], [[87]], [[88]], [[459, 113, 460, 346]], [[128]], [[129]], [[130]], [[131]], [[132]], [[133]], [[134]], [[135]], [[136]], [[137]], [[142]], [[143]], [[144]], [[145]], [[146]], [[147]], [[148]], [[149]], [[150]], [[151]], [[152]], [[153]], [[154]], [[155]], [[156]], [[157]], [[158]], [[159]], [[160]], [[167]], [[215]], [[216, 218]], [[233]], [[235, 326]], [[272]], [[273]], [[274]], [[278]], [[286, 352]], [[287]], [[304]], [[308]], [[332]], [[334, 569]], [[335]], [[336]], [[337]], [[338]], [[339]], [[340]], [[342, 496]], [[343]], [[344]], [[347]], [[365]], [[372]], [[373]], [[376]], [[381]], [[382]], [[383]], [[419]], [[431]], [[464]], [[474]], [[475]], [[476]], [[477]], [[478]], [[487]], [[488]], [[489]], [[490]], [[491]], [[492]], [[493]], [[494]], [[495]], [[497]], [[502]], [[513]], [[515]], [[516]], [[517]], [[518]], [[519]], [[525]], [[526]], [[527]], [[545]], [[546]], [[547]], [[548]], [[549]], [[570]], [[574]], [[580]], [[581]], [[582]], [[583]], [[584]], [[587]], [[588]], [[589]], [[593]], [[594]]]</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    &quot;arcs&quot;: [[[67002, 72360], [284, -219], [209, 77], [58, 261], [219, 87], [157, 175], [55, 460], [234, 112], [44, 205], [131, -154], [84, -18]], [[68477, 73346], [154, -4], [210, -122]], [[68841, 73220], [85, -70], [201, 185], [93, -111], [90, 264], [166, -12], [43, 84], [29, 233], [120, 200], [150, -131], [-30, -176], [84, -27], [-26, -484], [110, -189], [97, 121], [123, 57], [173, 258], [192, -42], [286, -1]], [[70827, 73379], [50, -165]], [[70877, 73214], [-162, -65], [-141, -106], [-319, -67], [-298, -121], [-163, -251], [66, -244], [32, -287], [-139, -242], [12, -221], [-76, -207], [-265, 18], [110, -381], [-177, -146], [-118, -347], [15, -346], [-108, -162], [-103, 53], [-212, -75], [-31, -161], [-207, 1], [-154, -326], [-10, -490], [-361, -239], [-194, 50], [-56, -126], [-166, 74], [-278, -87], [-465, 294]], [[66909, 69007], [252, 523], [-23, 370], [-210, 97], [-22, 366], [-91, 460], [119, 315], [-121, 85], [76, 419], [113, 718]], [[56642, 45537], [29, -179], [-32, -279], [49, -270], [-41, -216], [24, -199], [-579, 7], [-13, -1832], [188, -471], [181, -360]], [[56448, 41738], [-510, -235], [-673, 82], [-192, 276], [-1126, -25], [-42, -40], [-166, 260], [-180, 17], [-166, -98], [-134, -110]], [[53259, 41865], [-26, 363], [38, 506], [96, 527], [15, 247], [90, 519], [66, 236], [159, 377], [90, 256], [29, 427], [-15, 326], [-83, 206], [-74, 350], [-68, 345], [15, 120], [85, 228], [-84, 557], [-57, 385], [-139, 364], [26, 112]], [[53422, 48316], [115, 78], [80, -11], [98, 69], [820, -7], [68, -430], [80, -345], [64, -186], [106, -301], [184, 46], [91, 81], [154, -81], [42, 144], [69, 336], [172, 22], [15, 100], [142, 2], [-24, -207], [337, 5], [5, -363], [56, -222], [-41, -347], [21, -354], [93, -214], [-15, -685], [68, 53], [121, -15], [172, 87], [127, -34]], [[53383, 48495], [-74, 433]], [[53309, 48928], [112, 249], [84, 97], [104, -198]], [[53609, 49076], [-101, -121], [-45, -148], [-9, -251], [-71, -61]], [[55719, 75933], [-35, -196], [39, -247], [115, -140]], [[55838, 75350], [-5, -151], [-91, -84], [-16, -187], [-129, -279]], [[55597, 74649], [-48, 40], [-5, 127], [-154, 193], [-24, 274], [23, 393], [38, 179], [-47, 91]], [[55380, 75946], [-18, 183], [120, 284], [18, -109], [75, 51]], [[55575, 76355], [59, -154], [66, -59], [19, -209]], [[64327, 65792], [49, 28], [11, -158], [217, 91], [230, -15], [168, -17], [190, 389], [207, 369], [176, 355]], [[65575, 66834], [52, -196]], [[65627, 66638], [38, -455]], [[65665, 66183], [-142, -2], [-23, -375], [50, -80], [-126, -114], [-1, -235], [-81, -238], [-7, -232]], [[65335, 64907], [-56, -122], [-835, 290], [-106, 584], [-11, 133]], [[31400, 20215], [-168, 16], [-297, 0], [0, 1286]], [[30935, 21517], [106, -267], [139, -432], [361, -345], [389, -144], [-125, -288], [-264, -29], [-141, 203]], [[32587, 39017], [511, -940], [227, -88], [339, -425], [286, -225], [40, -254], [-273, -876], [280, -156], [312, -88], [220, 92], [252, 441], [45, 509]], [[34826, 37007], [138, 110], [139, -332], [-6, -460], [-234, -318], [-186, -234], [-314, -559], [-370, -786]], [[33993, 34428], [-70, -461], [-74, -592], [3, -573], [-61, -128], [-21, -372]], [[33770, 32302], [-19, -301], [353, -493], [-38, -397], [173, -251], [-14, -282], [-267, -738], [-412, -309], [-557, -120], [-305, 58], [59, -343], [-57, -431], [51, -291], [-167, -202], [-284, -80], [-267, 210], [-108, -151], [39, -572], [188, -173], [152, 181], [82, -299], [-255, -179], [-223, -358], [-41, -579], [-66, -309], [-262, -1], [-218, -295], [-80, -432], [273, -422], [266, -116], [-96, -517], [-328, -325], [-180, -675], [-254, -227], [-113, -270], [89, -598], [185, -333], [-117, 29]], [[30952, 21711], [-257, 90], [-672, 77], [-115, 336], [6, 431], [-185, -37], [-98, 209], [-24, 611], [213, 253], [88, 365], [-33, 292], [148, 491], [101, 763], [-30, 338], [122, 109], [-30, 217], [-129, 115], [92, 242], [-126, 218], [-65, 665], [112, 117], [-47, 702], [65, 590], [75, 513], [166, 209], [-84, 563], [-1, 529], [210, 376], [-7, 481], [159, 562], [1, 530], [-72, 105], [-128, 994], [171, 592], [-27, 558], [100, 523], [182, 540], [196, 358], [-83, 226], [58, 186], [-9, 960], [302, 284], [96, 598], [-34, 144]], [[31359, 38736], [231, 521], [364, -141], [163, -416], [109, 464], [316, -24], [45, -123]], [[62106, 75494], [386, 89]], [[62492, 75583], [57, -151], [106, -100], [-56, -144], [148, -198], [-78, -183], [118, -157], [124, -94], [7, -399]], [[62918, 74157], [-101, -17]], [[62817, 74140], [-113, 333], [1, 89], [-123, -2], [-82, 155], [-58, -16]], [[62442, 74699], [-109, 168], [-207, 144], [27, 280], [-47, 203]], [[33452, 5736], [-82, -294], [-81, -259], [-582, 79], [-621, -34], [-348, 192], [0, 22], [-152, 170], [625, -23], [599, -56], [207, 237], [147, 203], [288, -237]], [[5775, 6048], [-533, -79], [-364, 204], [-163, 203], [-11, 34], [-180, 158], [169, 214], [517, -90], [277, -181], [212, -203], [76, -260]], [[37457, 6883], [342, -248], [120, -350], [33, -248], [11, -293], [-430, -181], [-452, -146], [-522, -136], [-582, -113], [-658, 34], [-365, 192], [49, 237], [593, 158], [239, 192], [174, 248], [126, 214], [168, 203], [180, 238], [0, -1], [141, 0], [414, 125], [419, -125]], [[16330, 9501], [359, -90], [332, 102], [-158, -203], [-261, -147], [-386, 45], [-278, 203], [60, 192], [332, -102]], [[15122, 9513], [425, -226], [-164, 23], [-359, 56], [-381, 158], [202, 124], [277, -135]], [[22505, 10404], [305, -79], [304, 68], [163, -327], [-217, 45], [-337, -23], [-343, 23], [-376, -34], [-283, 113], [-146, 237], [174, 101], [353, -79], [403, -45]], [[30985, 10967], [33, -259], [-49, -226], [-76, -214], [-326, -79], [-311, -113], [-364, 11], [136, 226], [-327, -79], [-310, -79], [-212, 169], [-16, 237], [305, 226], [190, 67], [321, -22], [82, 293], [16, 215], [-6, 462], [158, 271], [256, 90], [147, -214], [65, -214], [120, -260], [92, -248], [76, -260]], [[0, 3044], [16, -4], [245, 335], [501, -181], [32, 21], [294, 183], [38, -6], [32, -5], [402, -239], [352, 239], [63, 33], [816, 102], [265, -135], [130, -68], [419, -192], [789, -147], [625, -180], [1072, -136], [800, 158], [1181, -113], [669, -180], [734, 169], [773, 158], [60, 271], [-1094, 22], [-898, 136], [-234, 225], [-745, 125], [49, 259], [103, 237], [104, 214], [-55, 237], [-462, 158], [-212, 204], [-430, 180], [675, -34], [642, 91], [402, -192], [495, 169], [457, 214], [223, 192], [-98, 237], [-359, 158], [-408, 169], [-571, 34], [-500, 79], [-539, 57], [-180, 214], [-359, 181], [-217, 203], [-87, 654], [136, -56], [250, -181], [457, 57], [441, 79], [228, -249], [441, 57], [370, 124], [348, 158], [315, 192], [419, 56], [-11, 215], [-97, 214], [81, 203], [359, 102], [163, -192], [425, 113], [321, 146], [397, 12], [375, 56], [376, 136], [299, 124], [337, 124], [218, -34], [190, -45], [414, 79], [370, -102], [381, 12], [364, 79], [375, -57], [414, -56], [386, 22], [403, -11], [413, -11], [381, 22], [283, 170], [337, 90], [349, -124], [331, 101], [300, 203], [179, -180], [98, -203], [180, -192], [288, 169], [332, -214], [375, -68], [321, -158], [392, 34], [354, 101], [418, -22], [376, -79], [381, -102], [147, 249], [-180, 191], [-136, 204], [-359, 45], [-158, 214], [-60, 214], [-98, 429], [213, -79], [364, -34], [359, 34], [327, -90], [283, -169], [119, -203], [376, -34], [359, 79], [381, 113], [342, 67], [283, -135], [370, 45], [239, 440], [224, -259], [321, -102], [348, 56], [228, -225], [365, -23], [337, -68], [332, -124], [218, 215], [108, 203], [278, -226], [381, 57], [283, -125], [190, -191], [370, 56], [288, 124], [283, 147], [337, 79], [392, 68], [354, 79], [272, 124], [163, 180], [65, 249], [-32, 236], [-87, 226], [-98, 226], [-87, 226], [-71, 203], [-16, 225], [27, 226], [130, 214], [109, 237], [44, 226], [-55, 248], [-32, 226], [136, 260], [152, 169], [180, 214], [190, 181], [223, 169], [109, 248], [152, 158], [174, 147], [267, 34], [174, 180], [196, 113], [228, 68], [202, 147], [157, 180], [218, 68], [163, -147], [-103, -192], [-283, -169], [-120, -124], [-206, 90], [-229, -56], [-190, -136], [-202, -146], [-136, -170], [-38, -225], [17, -215], [130, -191], [-190, -136], [-261, -45], [-153, -192], [-163, -180], [-174, -249], [-44, -214], [98, -237], [147, -181], [229, -135], [212, -181], [114, -225], [60, -215], [82, -225], [130, -192], [82, -215], [38, -530], [81, -214], [22, -226], [87, -226], [-38, -304], [-152, -237], [-163, -192], [-370, -79], [-125, -203], [-169, -192], [-419, -215], [-370, -90], [-348, -124], [-376, -124], [-223, -237], [-446, -23], [-489, 23], [-441, -45], [-468, 0], [87, -226], [424, -101], [311, -158], [174, -204], [-310, -180], [-479, 56], [-397, -146], [-17, -237], [-11, -226], [327, -192], [60, -214], [353, -215], [588, -90], [500, -158], [398, -180], [506, -181], [690, -90], [681, -158], [473, -170], [517, -191], [272, -271], [136, -215], [337, 204], [457, 169], [484, 180], [577, 147], [495, 158], [691, 11], [680, -79], [560, -135], [180, 248], [386, 169], [702, 12], [550, 124], [522, 124], [577, 79], [614, 102], [430, 146], [-196, 203], [-119, 203], [0, 215], [-539, -23], [-571, -90], [-544, 0], [-77, 214], [39, 429], [125, 124], [397, 136], [468, 135], [337, 169], [337, 170], [251, 225], [380, 102], [376, 79], [190, 45], [430, 23], [408, 79], [343, 112], [337, 136], [305, 135], [386, 181], [245, 192], [261, 169], [82, 226], [-294, 135], [98, 237], [185, 181], [288, 112], [305, 136], [283, 180], [217, 226], [136, 271], [202, 158], [331, -34], [136, -192], [332, -22], [11, 214], [142, 226], [299, -57], [71, -214], [331, -34], [360, 102], [348, 67], [315, -34], [120, -237], [305, 192], [283, 102], [315, 79], [310, 79], [283, 135], [310, 91], [240, 124], [168, 203], [207, -147], [288, 79], [202, -271], [157, -203], [316, 113], [125, 226], [283, 158], [365, -34], [108, -215], [229, 215], [299, 68], [326, 22], [294, -11], [310, -68], [300, -34], [130, -192], [180, -169], [304, 102], [327, 22], [315, 0], [310, 12], [278, 79], [294, 67], [245, 158], [261, 102], [283, 56], [212, 158], [152, 316], [158, 192], [288, -90], [109, -203], [239, -136], [289, 45], [196, -203], [206, -146], [283, 135], [98, 248], [250, 102], [289, 192], [272, 79], [326, 112], [218, 125], [228, 135], [218, 124], [261, -68], [250, 203], [180, 158], [261, -11], [229, 136], [54, 203], [234, 158], [228, 113], [278, 90], [256, 45], [244, -34], [262, -56], [223, -158], [27, -249], [245, -191], [168, -158], [332, -68], [185, -158], [229, -158], [266, -34], [223, 113], [240, 237], [261, -124], [272, -68], [261, -68], [272, -45], [277, 0], [229, -598], [-11, -147], [-33, -259], [-266, -147], [-218, -214], [38, -226], [310, 11], [-38, -225], [-141, -215], [-131, -237], [212, -180], [321, -57], [321, 102], [153, 226], [92, 214], [153, 181], [174, 169], [70, 203], [147, 282], [174, 57], [316, 22], [277, 68], [283, 90], [136, 226], [82, 214], [190, 215], [272, 146], [234, 113], [153, 192], [157, 101], [202, 91], [277, -57], [250, 57], [272, 67], [305, -33], [201, 158], [142, 383], [103, -158], [131, -271], [234, -112], [266, -46], [267, 68], [283, -45], [261, -11], [174, 56], [234, -34], [212, -124], [250, 79], [300, 0], [255, 79], [289, -79], [185, 192], [141, 192], [191, 158], [348, 429], [179, -79], [212, -158], [185, -203], [354, -350], [272, -12], [256, 0], [299, 68], [299, 79], [229, 158], [190, 169], [310, 23], [207, 124], [218, -113], [141, -180], [196, -181], [305, 23], [190, -147], [332, -147], [348, -56], [288, 45], [218, 181], [185, 180], [250, 45], [251, -79], [288, -56], [261, 90], [250, 0], [245, -56], [256, -57], [250, 102], [299, 90], [283, 23], [316, 0], [255, 56], [251, 45], [76, 282], [11, 237], [174, -158], [49, -259], [92, -237], [115, -192], [234, -102], [315, 34], [365, 12], [250, 33], [364, 0], [262, 12], [364, -23], [310, -45], [196, -181], [-54, -214], [179, -169], [299, -136], [310, -146], [360, -102], [375, -90], [283, -90], [315, -12], [180, 192], [245, -158], [212, -180], [245, -136], [337, -56], [321, -68], [136, -226], [316, -135], [212, -203], [310, -90], [321, 11], [299, -34], [332, 11], [332, -45], [310, -79], [288, -135], [289, -113], [195, -169], [-32, -226], [-147, -203], [-125, -260], [-98, -203], [-131, -237], [-364, -90], [-163, -203], [-360, -124], [-125, -226], [-190, -214], [-201, -181], [-115, -237], [-70, -214], [-28, -260], [6, -214], [158, -226], [60, -214], [130, -204], [517, -78], [109, -249], [-501, -90], [-424, -124], [-528, -23], [-234, -327], [-49, -271], [-119, -214], [-147, -215], [370, -191], [141, -237], [239, -215], [338, -192], [386, -180], [419, -181], [636, -180], [142, -282], [800, -125], [53, -44], [208, -170], [767, 147], [636, -181], [-99520, -139]], [[69148, 23827], [179, -181], [263, -72], [9, -110], [-77, -262], [-427, -37], [-7, 306], [41, 238], [19, 118]], [[90387, 28338], [269, -199], [151, 79], [217, 111], [166, -39], [20, -684], [-95, -198], [-29, -463], [-97, 157], [-193, -401], [-57, 31], [-171, 18], [-171, 493], [-38, 380], [-160, 502], [7, 264], [181, -51]], [[89877, 43903], [100, -452], [179, 217], [92, -243], [133, -225], [-29, -255], [60, -494], [42, -288], [70, -70], [75, -492], [-27, -299], [90, -390], [301, -301], [197, -274], [186, -251], [-37, -139], [159, -361], [108, -623], [111, 126], [113, -249], [68, 88], [48, -610], [197, -354], [129, -220], [217, -466], [78, -463], [7, -328], [-19, -356], [132, -490], [-16, -509], [-48, -267], [-75, -514], [6, -330], [-55, -413], [-123, -524], [-205, -283], [-102, -446], [-93, -284], [-82, -497], [-107, -287], [-70, -431], [-36, -397], [14, -182], [-159, -200], [-311, -21], [-257, -236], [-127, -223], [-168, -248], [-230, 255], [-170, 101], [43, 301], [-152, -109], [-243, -417], [-240, 156], [-158, 91], [-159, 41], [-269, 167], [-179, 355], [-52, 437], [-64, 291], [-137, 233], [-267, 70], [91, 279], [-67, 428], [-136, -399], [-247, -106], [146, 319], [42, 332], [107, 282], [-22, 427], [-226, -491], [-174, -197], [-106, -458], [-217, 237], [9, 305], [-174, 418], [-147, 216], [52, 133], [-356, 349], [-195, 16], [-267, 280], [-498, -54], [-359, -206], [-317, -192], [-265, 38], [-294, -296], [-241, -132], [-53, -302], [-103, -234], [-236, -14], [-174, -52], [-246, 105], [-199, -62], [-191, -27], [-165, -307], [-81, 26], [-140, -163], [-133, -183], [-203, 23], [-186, 0], [-295, 368], [-149, 109], [6, 330], [138, 79], [47, 131], [-10, 207], [34, 400], [-31, 341], [-147, 582], [-45, 329], [12, 328], [-111, 375], [-7, 169], [-123, 230], [-35, 451], [-158, 456], [-39, 245], [122, -249], [-93, 535], [137, -167], [83, -223], [-5, 294], [-138, 454], [-26, 181], [-65, 173], [31, 333], [56, 141], [38, 289], [-29, 336], [114, 415], [21, -439], [118, 396], [225, 193], [136, 245], [212, 212], [126, 45], [77, -71], [219, 214], [168, 64], [42, 126], [74, 53], [153, -14], [292, 169], [151, 256], [71, 307], [163, 293], [13, 229], [7, 314], [194, 489], [117, -497], [119, 115], [-99, 272], [87, 279], [122, -125], [34, 439], [152, 283], [67, 227], [140, 98], [4, 161], [122, -67], [5, 145], [122, 82], [134, 78], [205, -264], [155, -342], [173, -3], [177, -54], [-59, 316], [133, 462], [126, 150], [-44, 144], [121, 329], [168, 203], [142, -68], [234, 108], [-5, 294], [-204, 190], [148, 84], [184, -143], [148, -236], [234, -148], [79, 59], [172, -177], [162, 164], [105, -50], [65, 111], [127, -285], [-74, -308], [-105, -233], [-96, -19], [32, -230], [-81, -288], [-99, -283], [20, -163], [221, -318], [214, -184], [143, -199], [201, -341], [78, 1], [145, -148], [43, -178], [265, -195], [183, 197], [55, 309], [56, 255], [34, 316], [85, 458], [-39, 279], [20, 167], [-32, 330], [37, 434], [53, 117], [-43, 192], [67, 305], [52, 317], [7, 164], [104, 216], [78, -282], [19, -361], [70, -70], [11, -242], [101, -293], [21, -326], [-10, -209]], [[54716, 79543], [-21, -236], [-156, -1], [53, -125], [-92, -370]], [[54500, 78811], [-53, -97], [-243, -15], [-140, -130], [-229, 44]], [[53835, 78613], [-398, 149], [-62, 200], [-274, -100], [-32, -109], [-169, 81]], [[52900, 78834], [-142, 16], [-125, 105], [42, 141], [-10, 102]], [[52665, 79198], [83, 32], [141, -160], [39, 152], [245, -25], [199, 104], [133, -18], [87, -118], [26, 98], [-40, 375], [100, 73], [98, 266]], [[53776, 79977], [206, -186], [157, 236], [98, 43], [215, -176], [131, 30], [128, -109]], [[54711, 79815], [-23, -73], [28, -199]], [[62817, 74140], [-190, 76], [-141, 266], [-44, 217]], [[63495, 75906], [146, -303], [141, -408], [130, -27], [85, -156], [-228, -46], [-49, -447], [-48, -202], [-101, -135], [7, -285]], [[63578, 73897], [-69, -28], [-173, 301], [95, 285], [-82, 169], [-104, -43], [-327, -424]], [[62492, 75583], [68, 94], [207, -165], [149, -34], [38, 67], [-136, 312], [72, 79]], [[62890, 75936], [78, -19], [191, -350], [122, -39], [48, 146], [166, 232]], [[58149, 49238], [-17, 694], [-70, 262]], [[58062, 50194], [169, -45], [85, 328], [147, -38]], [[58463, 50439], [16, -227], [60, -130], [3, -187], [-69, -121], [-108, -300], [-101, -209], [-115, -27]], [[50920, 81398], [204, -45], [257, 120], [176, -252], [153, -135]], [[51710, 81086], [-32, -389]], [[51678, 80697], [-72, -22], [-30, -323]], [[51576, 80352], [-243, 263], [-143, -45], [-194, 272], [-129, 231], [-129, 9], [-40, 203]], [[50698, 81285], [222, 113]], [[50747, 55434], [-229, -68]], [[50518, 55366], [-69, 398], [13, 1322], [-56, 119], [-11, 283], [-96, 201], [-85, 170], [35, 303]], [[50249, 58162], [96, 66], [56, 251], [136, 54], [61, 172]], [[50598, 58705], [93, 169], [100, 2], [212, -332]], [[51003, 58544], [-11, -191], [62, -342], [-54, -232], [29, -154], [-135, -357], [-86, -176], [-52, -364], [7, -366], [-16, -928]], [[49214, 57382], [-190, 149], [-130, -22], [-97, -145], [-125, 122], [-49, 190], [-125, 126]], [[48498, 57802], [-18, 334], [76, 244], [-7, 195], [221, 477], [41, 395], [76, 141], [134, -78], [116, 117], [38, 148], [216, 259], [53, 180], [259, 238], [153, 82], [70, -110], [178, 3]], [[50104, 60427], [-22, -280], [37, -262], [156, -376], [9, -279], [320, -130], [-6, -395]], [[50249, 58162], [-243, 13]], [[50006, 58175], [-128, 46], [-90, -93], [-123, 42], [-482, -27], [-7, -327], [38, -434]], [[75742, 64522], [-6, -413], [-97, 88], [18, -464]], [[75657, 63733], [-79, 301], [-16, 293], [-53, 277], [-116, 335], [-256, 23], [25, -237], [-87, -321], [-118, 117], [-41, -105], [-78, 63], [-108, 52]], [[74730, 64531], [-43, 474], [-96, 433], [47, 347], [-171, 154], [62, 210], [173, 215], [-200, 305], [98, 390], [220, -248], [133, -29], [24, -400], [265, -79], [257, 8], [160, -98], [-128, -487], [-124, -34], [-86, -327], [152, -299], [46, 368], [76, 2], [147, -914]], [[56293, 77303], [80, -236], [108, 42], [213, -90], [408, -30], [138, 147], [327, 133], [202, -209], [163, -60]], [[57932, 77000], [-144, -239], [-101, -412], [89, -328]], [[57776, 76021], [-239, 77], [-283, -181]], [[57254, 75917], [-3, -287], [-252, -55], [-196, 202], [-222, -159], [-206, 17]], [[56375, 75635], [-20, 381], [-139, 185]], [[56216, 76201], [46, 81], [-30, 69], [47, 183], [105, 180], [-135, 248], [-24, 211], [68, 130]], [[28462, 65512], [-68, -29], [-70, 332], [-104, 167], [60, 365], [84, -23], [97, -478], [1, -334]], [[28383, 67136], [-303, -92], [-19, 213], [130, 46], [184, -17], [8, -150]], [[28611, 67142], [-48, -409], [-51, 73], [4, 301], [-124, 228], [-1, 66], [220, -259]], [[55279, 77663], [100, 2], [-69, -253], [134, -222], [-41, -271], [-65, -25]], [[55338, 76894], [-52, -53], [-90, -134], [-41, -316]], [[55155, 76391], [-246, 218], [-105, 240], [-106, 128], [-127, 215], [-61, 178], [-136, 270], [59, 239], [99, -133], [60, 120], [130, 13], [239, -96], [192, 8], [126, -128]], [[56523, 82877], [268, -4], [302, 217], [64, 325], [228, 184], [-26, 258]], [[57359, 83857], [169, 97], [298, 222]], [[57826, 84176], [293, -144], [39, -143], [146, 68], [272, -137], [27, -270], [-60, -156], [174, -377], [113, -105], [-16, -104], [187, -101], [80, -154], [-108, -126], [-224, 20], [-54, -53], [66, -192], [68, -368]], [[58829, 81834], [-239, -34], [-85, -127], [-18, -290], [-111, 56], [-250, -28], [-73, 135], [-104, -100], [-105, 83], [-218, 11], [-310, 139], [-281, 45], [-215, -13], [-152, -156], [-133, -23]], [[56535, 81532], [-6, 257], [-85, 267], [166, 117], [2, 230], [-77, 219], [-12, 255]], [[25238, 62085], [-2, 85], [33, 26], [51, -68], [99, 348], [53, 7]], [[25472, 62483], [1, -84], [53, -3], [-5, -157], [-45, -249], [24, -89], [-29, -206], [18, -55], [-32, -291], [-55, -153], [-50, -18], [-55, -199]], [[25297, 60979], [-83, -1], [22, 650], [2, 457]], [[31359, 38736], [-200, -79], [-109, 794], [-150, 646], [88, 557], [-146, 244], [-37, 416], [-136, 391]], [[30669, 41705], [175, 622], [-119, 484], [63, 194], [-49, 213], [108, 288], [6, 490], [13, 405], [60, 195], [-240, 926]], [[30686, 45522], [206, -48], [143, 12], [62, 174], [243, 234], [147, 216], [363, 98], [-29, -432], [34, -221], [-23, -386], [302, -516], [311, -95], [109, -216], [188, -114], [115, -167], [175, 6], [161, -171], [12, -333], [55, -168], [3, -248], [-81, -10], [107, -671], [533, -23], [-41, -333], [30, -227], [151, -162], [66, -358], [-49, -453], [-77, -253], [27, -328], [-87, -119]], [[33842, 40210], [-4, 177], [-259, 295], [-258, 8], [-484, -167], [-133, -507], [-7, -310], [-110, -689]], [[34826, 37007], [54, 332], [38, 340], [0, 317], [-100, 105], [-104, -94], [-103, 26], [-33, 222], [-26, 527], [-52, 172], [-187, 156], [-114, -113], [-293, 111], [18, 782], [-82, 320]], [[30686, 45522], [-157, -99], [-126, 66], [18, 875], [-228, -339], [-245, 15], [-105, 307], [-184, 33], [59, 247], [-155, 351], [-115, 518], [73, 106], [0, 243], [168, 166], [-28, 312], [71, 200], [20, 269], [318, 392], [227, 111], [37, 86], [251, -27]], [[30585, 49354], [125, 1579], [6, 250], [-43, 330], [-123, 210], [1, 418], [156, 95], [56, -60], [9, 221], [-162, 60], [-4, 360], [541, -13], [92, 198], [77, -182], [55, -340], [52, 71]], [[31423, 52551], [153, -304], [216, 37], [54, 176], [206, 135], [115, 94], [32, 244], [198, 164], [-15, 121], [-235, 49], [-39, 363], [12, 386], [-125, 149], [52, 53], [206, -73], [221, -144], [80, 136], [200, 89], [310, 216], [102, 220], [-37, 162]], [[33129, 54824], [145, 26], [64, -133], [-36, -253], [96, -87], [63, -268], [-77, -203], [-44, -490], [71, -291], [20, -267], [171, -270], [137, -28], [30, 112], [88, 25], [126, 101], [90, 153], [154, -48], [67, 20]], [[34294, 52923], [151, -47], [25, 118], [-46, 114], [28, 167], [112, -51], [131, 59], [159, -122]], [[34854, 53161], [121, -119], [86, 156], [62, -24], [38, -162], [133, 41], [107, 219], [85, 424], [164, 527]], [[35650, 54223], [95, 27], [69, -318], [155, -1008], [149, -95], [7, -397], [-208, -474], [86, -174], [491, -90], [10, -578], [211, 378], [349, -207], [462, -351], [135, -338], [-45, -319], [323, 178], [540, -305], [415, 23], [411, -477], [355, -645], [214, -166], [237, -23], [101, -182], [94, -733], [46, -348], [-110, -953], [-142, -376], [-391, -801], [-177, -651], [-206, -499], [-69, -11], [-78, -424], [20, -1079], [-77, -888], [-30, -379], [-88, -228], [-49, -769], [-282, -752], [-47, -595], [-225, -250], [-65, -345], [-302, 2], [-437, -222], [-195, -256], [-311, -168], [-327, -459], [-235, -571], [-41, -430], [46, -318], [-51, -582], [-63, -281], [-195, -317], [-308, -1013], [-244, -457], [-189, -269], [-127, -548], [-183, -329]], [[35174, 32383], [-77, 326], [122, 273], [-160, 392], [-218, 318], [-286, 369], [-103, -17], [-279, 446], [-180, -62]], [[81723, 54436], [110, 215], [236, 316]], [[82069, 54967], [-13, -284], [-16, -368], [-133, 18], [-58, -196], [-126, 299]], [[75471, 67823], [113, -184], [-20, -354], [-227, -17], [-234, 39], [-175, -90], [-252, 218], [-6, 115]], [[74670, 67550], [184, 429], [150, 146], [198, -134], [147, -14], [122, -154]], [[58175, 39107], [-393, -424], [-249, -430], [-93, -383], [-83, -217], [-152, -46], [-48, -275], [-28, -180], [-178, -134], [-226, 28], [-133, 162], [-117, 70], [-135, -134], [-68, -276], [-132, -173], [-139, -257], [-199, -59], [-62, 202], [26, 351], [-165, 548], [-75, 86]], [[55526, 37566], [0, 1681], [274, 20], [8, 2051], [207, 19], [428, 202], [106, -238], [177, 226], [85, 1], [156, 130]], [[56967, 41658], [50, -43]], [[57017, 41615], [107, -460], [56, -103], [87, -333], [315, -633], [119, -62], [0, -203], [82, -365], [215, -88], [177, -261]], [[54244, 56103], [229, 44], [52, 148], [46, -11], [69, -131], [350, 221], [118, 224], [145, 202], [-28, 202], [78, 53], [269, -35], [261, 266], [201, 629], [141, 233], [176, 98]], [[56351, 58246], [31, -246], [160, -360], [1, -235], [-45, -240], [18, -179], [96, -166]], [[56612, 56820], [212, -252]], [[56824, 56568], [152, -232], [2, -188], [187, -299], [116, -250], [70, -345], [208, -228], [44, -183]], [[57603, 54843], [-91, -61], [-178, 14], [-209, 60], [-104, -49], [-41, -140], [-90, -17], [-110, 121], [-309, -287], [-127, 58], [-38, -45], [-83, -347], [-207, 112], [-203, 57], [-177, 212], [-229, 196], [-149, -186], [-108, -292], [-25, -402]], [[55125, 53847], [-178, 33], [-188, 96], [-166, -305], [-146, -536]], [[54447, 53135], [-29, 167], [-12, 263], [-127, 185], [-103, 297], [-23, 207], [-132, 301], [23, 171], [-28, 243], [21, 446], [67, 105], [140, 583]], [[32315, 78637], [202, -78], [257, 16], [-137, -236], [-102, -37], [-353, 244], [-69, 193], [105, 177], [97, -279]], [[32831, 80108], [-135, -10], [-360, 180], [-258, 272], [96, 49], [365, -145], [284, -240], [8, -106]], [[15692, 79765], [-140, -80], [-456, 262], [-84, 204], [-248, 202], [-50, 164], [-286, 103], [-107, 314], [24, 133], [291, -125], [171, -88], [261, -61], [94, -198], [138, -274], [277, -238], [115, -318]], [[34407, 81019], [-184, -504], [181, 195], [187, -124], [-98, -200], [247, -158], [128, 140], [277, -177], [-86, -422], [194, 99], [36, -306], [86, -358], [-117, -507], [-125, -21], [-183, 109], [60, 471], [-77, 73], [-322, -499], [-166, 20], [196, 270], [-267, 140], [-298, -34], [-539, 17], [-43, 171], [173, 202], [-121, 157], [234, 347], [287, 917], [172, 328], [241, 198], [129, -25], [-54, -156], [-148, -363]], [[13005, 83025], [131, -75], [267, 46], [-84, -654], [242, -463], [-111, 1], [-167, 264], [-103, 265], [-140, 179], [-51, 253], [16, 184]], [[27981, 87625], [-108, -302], [-123, 49], [-73, 171], [13, 40], [107, 173], [114, -13], [70, -118]], [[27250, 87943], [-325, -317], [-196, 13], [-61, 156], [207, 265], [381, -5], [-6, -112]], [[26344, 89640], [51, -253], [143, 89], [161, -151], [304, -198], [318, -179], [25, -274], [204, 45], [199, -191], [-247, -181], [-432, 138], [-156, 259], [-275, -306], [-396, -298], [-95, 337], [-377, -55], [242, 284], [35, 454], [95, 527], [201, -47]], [[28926, 90499], [-312, -29], [-69, 282], [118, 323], [255, 80], [217, -160], [3, -246], [-32, -80], [-180, -170]], [[23431, 91627], [-173, -202], [-374, 175], [-226, -63], [-380, 259], [245, 178], [194, 250], [295, -164], [166, -103], [84, -110], [169, -220]], [[31350, 77823], [-181, 326], [0, 785], [-123, 166], [-187, -98], [-92, 152], [-212, -435], [-84, -448], [-99, -262], [-118, -89], [-89, -29], [-28, -142], [-512, -1], [-422, -4], [-125, -106], [-294, -414], [-34, -45], [-89, -225], [-255, 0], [-273, -2], [-125, -91], [44, -113], [25, -176], [-5, -58], [-363, -287], [-286, -90], [-323, -308], [-70, 0], [-94, 91], [-31, 82], [6, 60], [61, 202], [131, 317], [81, 340], [-56, 500], [-59, 523], [-290, 270], [35, 103], [-41, 70], [-76, 0], [-56, 91], [-14, 137], [-54, -60], [-75, 18], [17, 57], [-65, 57], [-27, 151], [-216, 185], [-224, 191], [-272, 223], [-261, 209], [-248, -163], [-91, -6], [-342, 150], [-225, -75], [-269, 179], [-284, 91], [-194, 36], [-86, 97], [-49, 317], [-94, -3], [-1, -221], [-575, 0], [-951, 0], [-944, -1], [-833, 1], [-834, 0], [-819, 0], [-847, 0], [-273, 0], [-825, 0], [-788, 0]], [[15878, 80048], [-38, 1], [-537, 566], [-199, 248], [-503, 239], [-155, 510], [40, 353], [-356, 245], [-48, 464], [-336, 419], [-6, 296]], [[13740, 83389], [154, 278], [-7, 363], [-473, 367], [-284, 657], [-173, 413], [-255, 259], [-187, 236], [-147, 298], [-279, -187], [-270, -321], [-247, 378], [-194, 252], [-271, 160], [-273, 17], [1, 3279], [2, 2137]], [[10837, 91975], [518, -139], [438, -277], [289, -53], [244, 241], [336, 179], [413, -70], [416, 253], [455, 144], [191, -239], [207, 134], [62, 272], [192, -62], [470, -516], [369, 390], [38, -437], [341, 95], [105, 168], [337, -33], [424, -242], [650, -211], [383, -98], [272, 37], [374, -292], [-390, -286], [502, -123], [750, 68], [236, 100], [296, -345], [302, 291], [-283, 245], [179, 197], [338, 26], [223, 58], [224, -138], [279, -312], [310, 46], [491, -260], [431, 91], [405, -13], [-32, 358], [247, 100], [431, -195], [-2, -545], [177, 459], [223, -15], [126, 579], [-298, 355], [-324, 233], [22, 636], [329, 418], [366, -92], [281, -255], [378, -649], [-247, -283], [517, -116], [-1, -589], [371, 451], [332, -371], [-83, -427], [269, -388], [290, 416], [202, 497], [16, 632], [394, -44], [411, -85], [373, -286], [17, -285], [-207, -307], [196, -309], [-36, -280], [-544, -403], [-386, -88], [-287, 173], [-83, -289], [-268, -486], [-81, -252], [-322, -389], [-397, -38], [-220, -244], [-18, -374], [-323, -72], [-340, -467], [-301, -648], [-108, -454], [-16, -669], [409, -96], [125, -539], [130, -437], [388, 114], [517, -250], [277, -219], [199, -272], [348, -158], [294, -243], [459, -33], [302, -56], [-45, -499], [86, -578], [201, -645], [414, -547], [214, 188], [150, 592], [-145, 909], [-196, 303], [445, 270], [314, 404], [154, 401], [-23, 385], [-188, 489], [-338, 434], [328, 603], [-121, 522], [-93, 899], [194, 133], [476, -157], [286, -56], [230, 152], [258, -196], [342, -333], [85, -224], [495, -44], [-8, -483], [92, -728], [254, -90], [201, -339], [402, 319], [266, 636], [184, 267], [216, -514], [362, -734], [307, -691], [-112, -362], [370, -325], [250, -329], [442, -149], [179, -183], [110, -488], [216, -76], [112, -217], [20, -647], [-202, -217], [-199, -202], [-458, -205], [-349, -473], [-470, -93], [-594, 121], [-417, 4], [-287, -40], [-233, -413], [-354, -255], [-401, -762], [-320, -532], [236, 95], [446, 756], [583, 480], [415, 58], [246, -283], [-262, -387], [88, -620], [91, -435], [361, -287], [459, 83], [278, 647], [19, -417], [180, -209], [-344, -377], [-615, -343], [-276, -233], [-310, -415], [-211, 43], [-11, 487], [483, 476], [-445, -19], [-309, -70]], [[18287, 93939], [-139, -270], [618, 174], [386, -291], [314, 294], [254, -188], [227, -566], [140, 238], [-197, 590], [244, 85], [276, -93], [311, -232], [175, -561], [86, -406], [466, -285], [502, -273], [-31, -253], [-456, -47], [178, -221], [-94, -211], [-503, 90], [-478, 156], [-322, -35], [-522, -196], [-704, -86], [-494, -54], [-151, 271], [-379, 157], [-246, -64], [-343, 456], [185, 61], [429, 99], [392, -26], [362, 100], [-537, 135], [-594, -46], [-394, 11], [-146, 213], [644, 230], [-428, -8], [-485, 152], [233, 431], [193, 229], [744, 351], [284, -111]], [[20972, 94111], [-244, -381], [-434, 404], [95, 80], [372, 23], [211, -126]], [[28794, 93928], [25, -159], [-296, 16], [-299, 13], [-304, -78], [-80, 35], [-306, 306], [12, 207], [133, 38], [636, -62], [479, -316]], [[25955, 93959], [219, -359], [256, 465], [704, 236], [477, -596], [-42, -377], [550, 168], [263, 228], [616, -291], [383, -274], [36, -252], [515, 131], [290, -367], [670, -228], [242, -232], [263, -539], [-510, -268], [654, -376], [441, -127], [400, -529], [437, -38], [-87, -404], [-487, -669], [-342, 246], [-437, 554], [-359, -72], [-35, -330], [292, -335], [377, -265], [114, -153], [181, -570], [-96, -414], [-350, 156], [-697, 461], [393, -496], [289, -348], [45, -201], [-753, 230], [-596, 334], [-337, 281], [97, 162], [-414, 296], [-405, 280], [5, -167], [-803, -92], [-235, 198], [183, 424], [522, 10], [571, 74], [-92, 205], [96, 287], [360, 561], [-77, 255], [-107, 197], [-425, 280], [-563, 196], [178, 145], [-294, 358], [-245, 33], [-219, 196], [-149, -170], [-503, -74], [-1011, 129], [-588, 169], [-450, 87], [-231, 202], [290, 263], [-394, 2], [-88, 583], [213, 515], [286, 235], [717, 154], [-204, -373]], [[22123, 94355], [331, -122], [496, 73], [72, -167], [-259, -276], [420, -248], [-50, -518], [-455, -223], [-268, 48], [-192, 220], [-690, 444], [5, 185], [567, -72], [-306, 377], [329, 279]], [[24112, 93737], [-298, -430], [-317, 21], [-173, 506], [4, 287], [145, 244], [276, 157], [579, -20], [530, -140], [-415, -513], [-331, -112]], [[16539, 92938], [-731, -278], [-147, 253], [-641, 304], [119, 244], [192, 421], [241, 378], [-272, 353], [939, 90], [397, -119], [709, -32], [270, -167], [298, -243], [-349, -145], [-681, -405], [-344, -403], [0, -251]], [[23996, 95009], [-151, -223], [-403, 43], [-337, 150], [148, 259], [399, 155], [243, -202], [101, -182]], [[22639, 96011], [212, -267], [9, -295], [-127, -429], [-458, -59], [-298, 92], [5, 336], [-455, -44], [-18, 445], [299, -18], [419, 197], [390, -34], [22, 76]], [[19941, 95712], [109, -205], [247, 97], [291, -25], [49, -282], [-169, -274], [-940, -89], [-701, -249], [-423, -13], [-35, 187], [577, 255], [-1255, -69], [-389, 103], [379, 563], [262, 161], [782, -194], [493, -341], [485, -44], [-397, 551], [255, 210], [286, -67], [94, -275]], [[23699, 96229], [308, -186], [547, 2], [240, -190], [-64, -216], [319, -130], [177, -137], [374, -26], [406, -48], [441, 125], [566, 49], [451, -40], [298, -218], [62, -238], [-174, -153], [-414, -124], [-355, 70], [-797, -88], [-570, -11], [-449, 71], [-738, 186], [-96, 316], [-34, 286], [-279, 251], [-574, 70], [-322, 179], [104, 236], [573, -36]], [[17722, 96544], [-38, -443], [-214, -199], [-259, -29], [-517, -246], [-444, -88], [-377, 124], [472, 431], [570, 373], [426, -8], [381, 85]], [[23933, 96472], [-126, -17], [-521, 37], [-74, 161], [559, -9], [195, -107], [-33, -65]], [[19392, 96574], [-518, -166], [-411, 186], [224, 183], [406, 59], [392, -90], [-93, -172]], [[19538, 97095], [-339, -113], [-461, 1], [5, 82], [285, 173], [149, -27], [361, -116]], [[23380, 96781], [-411, -119], [-226, 134], [-119, 216], [-22, 238], [360, -23], [162, -38], [332, -200], [-76, -208]], [[22205, 96935], [108, -240], [-453, 64], [-457, 187], [-619, 21], [268, 171], [-335, 139], [-21, 221], [546, -79], [751, -210], [212, -274]], [[25828, 97704], [334, -186], [-381, -171], [-513, -434], [-492, -41], [-575, 74], [-299, 235], [4, 208], [220, 154], [-508, -5], [-306, 192], [-176, 261], [193, 256], [192, 175], [285, 41], [-122, 132], [646, 29], [355, -308], [468, -123], [455, -109], [220, -380]], [[30972, 99689], [742, -45], [597, -74], [508, -156], [-12, -154], [-678, -250], [-672, -117], [-251, -129], [605, 3], [-656, -349], [-452, -163], [-476, -470], [-573, -96], [-177, -117], [-841, -62], [383, -72], [-192, -103], [230, -284], [-264, -198], [-429, -163], [-132, -225], [-388, -172], [39, -130], [475, 22], [6, -141], [-742, -345], [-726, 159], [-816, -89], [-414, 69], [-525, 30], [-35, 277], [514, 130], [-137, 415], [170, 41], [742, -249], [-379, 370], [-450, 110], [225, 223], [492, 137], [79, 201], [-392, 225], [-118, 297], [759, -25], [220, -63], [433, 210], [-625, 67], [-972, -37], [-491, 196], [-232, 232], [-324, 169], [-61, 197], [413, 110], [324, 18], [545, 94], [409, 214], [344, -30], [300, -161], [211, 311], [367, 92], [498, 64], [849, 24], [148, -63], [802, 98], [601, -37], [602, -36]], [[52900, 78834], [-22, -236], [-122, -97], [-206, 72], [-60, -232], [-132, -18], [-48, 91], [-156, -195], [-134, -28], [-120, 124]], [[51900, 78315], [-95, 252], [-133, -90], [5, 261], [203, 323], [-9, 147], [126, -53], [77, 98]], [[52074, 79253], [236, -4], [57, 125], [298, -176]], [[31400, 20215], [-92, -233], [-238, -178], [-137, 18], [-164, 46], [-202, 174], [-291, 83], [-350, 322], [-283, 309], [-383, 645], [229, -121], [390, -384], [369, -207], [143, 264], [90, 394], [256, 238], [198, -68]], [[30952, 21711], [-247, 4], [-134, -141], [-250, -208], [-45, -538], [-118, -14], [-313, 188], [-318, 401], [-346, 329], [-87, 365], [79, 337], [-140, 383], [-36, 982], [119, 554], [293, 445], [-422, 168], [265, 509], [94, 956], [309, -202], [145, 1193], [-186, 153], [-87, -719], [-175, 81], [87, 823], [95, 1067], [127, 394], [-80, 562], [-22, 649], [117, 18], [170, 930], [192, 922], [118, 858], [-64, 863], [83, 475], [-34, 711], [163, 703], [50, 1114], [89, 1196], [87, 1287], [-20, 943], [-58, 811]], [[30452, 41263], [143, 147], [74, 295]], [[80649, 62586], [-240, -277], [-228, 179], [-8, 495], [137, 261], [304, 161], [159, -13], [62, -220], [-122, -254], [-64, -332]], [[86288, 76244], [-179, 340], [-111, -323], [-429, -248], [44, -304], [-241, 21], [-131, 181], [-191, -409], [-306, -309], [-227, -370]], [[84517, 74823], [-388, -167], [-204, -269], [-300, -157], [148, 267], [-58, 224], [220, 387], [-147, 302], [-242, -204], [-314, -400], [-171, -372], [-272, -28], [-142, -268], [147, -390], [227, -94], [9, -259], [220, -168], [311, 411], [247, -224], [179, -15], [45, -302], [-393, -161], [-130, -311], [-270, -289], [-142, -403], [299, -316], [109, -567], [169, -527], [189, -443], [-5, -428], [-174, -157], [66, -307], [164, -179], [-43, -469], [-71, -456], [-155, -52], [-203, -623], [-225, -756], [-258, -687], [-382, -532], [-386, -484], [-313, -67], [-170, -255], [-96, 186], [-157, -286], [-388, -288], [-294, -88], [-95, -609], [-154, -33], [-73, 418], [66, 222], [-373, 185], [-131, -94]], [[80013, 64241], [-280, 149], [-132, 234], [44, 332], [-254, 105], [-134, 216], [-236, -307], [-271, -66], [-221, 3], [-149, -141]], [[78380, 64766], [-144, -84], [42, -659], [-148, 16], [-25, 135]], [[78105, 64174], [-9, 238], [-203, -167], [-121, 106], [-206, 216], [81, 478], [-176, 112], [-66, 530], [-293, -96], [33, 684], [263, 480], [11, 475], [-8, 441], [-121, 137], [-93, 339], [-162, -42]], [[77035, 68105], [-300, 86], [94, 242], [-130, 358], [-198, -243], [-233, 142], [-321, -367], [-252, -428], [-224, -72]], [[74670, 67550], [-23, 454], [-170, -121]], [[74477, 67883], [-324, 56], [-314, 132], [-225, 253], [-216, 114], [-93, 276], [-157, 83], [-280, 375], [-223, 177], [-115, -138]], [[72530, 69211], [-386, 403], [-273, 365], [-78, 635], [200, -78], [9, 294], [-111, 295], [28, 470], [-298, 675]], [[71621, 72270], [-457, 233], [-82, 442], [-205, 269]], [[70827, 73379], [-42, 328], [10, 224], [-169, 131], [-91, -58], [-70, 533]], [[70465, 74537], [79, 132], [-39, 135], [266, 272], [192, 112], [294, -77], [105, 368], [356, 68], [99, 229], [438, 312], [39, 130]], [[72294, 76218], [-22, 328], [190, 150], [-250, 1000], [550, 231], [143, 128], [200, 1031], [551, -190], [155, 261], [13, 577], [230, 54], [212, 383]], [[74266, 80171], [109, 48]], [[74375, 80219], [73, -402], [233, -306], [396, -216], [192, -464], [-107, -673], [100, -249], [330, -99], [374, -80], [336, -359], [171, -64], [127, -531], [163, -342], [306, 14], [574, -129], [369, 80], [274, -86], [411, -350], [336, 1], [123, -179], [324, 309], [448, 200], [417, 21], [324, 203], [200, 309], [194, 193], [-45, 190], [-89, 222], [146, 371], [156, -52], [286, -117], [277, 306], [423, 223], [204, 380], [195, 164], [404, 77], [219, -65], [30, 204], [-251, 403], [-223, 184], [-214, -212], [-274, 89], [-157, -73], [-72, 236], [197, 575], [135, 434]], [[82410, 80559], [333, -217], [392, 364], [-3, 253], [251, 611], [155, 184], [-4, 318], [-152, 137], [229, 287], [345, 104], [369, 15], [415, -171], [244, -212], [172, -581], [104, -248], [97, -354], [103, -564], [483, -184], [329, -409], [112, -541], [423, -1], [240, 227], [459, 170], [-146, -518], [-107, -211], [-96, -631], [-186, -560], [-338, 102], [-238, -203], [73, -494], [-40, -680], [-142, -16], [2, -292]], [[49206, 54706], [-126, -6], [-194, 112], [-178, -6], [-329, -101], [-193, -166], [-275, -211], [-54, 15]], [[47857, 54343], [22, 474], [26, 72], [-8, 227], [-118, 241], [-88, 39], [-81, 158], [60, 256], [-28, 278], [13, 168]], [[47655, 56256], [44, 0], [17, 251], [-22, 112], [27, 80], [103, 69], [-69, 461], [-64, 238], [23, 195], [55, 45]], [[47769, 57707], [36, 52], [77, -86], [215, -5], [51, 168], [48, -11], [80, 65], [43, -246], [65, 72], [114, 86]], [[49214, 57382], [74, -819], [-117, -484], [-73, -650], [121, -496], [-13, -227]], [[53632, 53135], [-35, 31], [-164, -74], [-169, 77], [-132, -38]], [[53132, 53131], [-452, 14]], [[52680, 53145], [40, 454], [-108, 381], [-127, 98], [-56, 258], [-72, 82], [4, 159]], [[52361, 54577], [71, 408], [132, 556], [81, 5], [165, 337], [105, 9], [156, -236], [191, 194], [26, 239], [63, 232], [43, 291], [148, 238], [56, 403], [59, 128], [39, 299], [74, 368], [234, 446], [14, 191], [31, 104], [-110, 229]], [[53939, 59018], [9, 184], [78, 33]], [[54026, 59235], [111, -369], [18, -382], [-10, -383], [151, -523], [-155, 6], [-78, -41], [-127, 57], [-60, -271], [164, -336], [121, -98], [39, -239], [87, -397], [-43, -156]], [[54447, 53135], [-20, -311], [-220, 136], [-225, 152], [-350, 23]], [[58564, 53850], [-16, -673], [111, -78], [-89, -205], [-107, -153], [-106, -300], [-59, -268], [-15, -462], [-65, -220], [-2, -434]], [[58216, 51057], [-80, -161], [-10, -342], [-38, -45], [-26, -315]], [[58149, 49238], [50, -530], [-27, -299], [55, -334], [161, -323], [150, -726]], [[58538, 47026], [-109, 59], [-373, -97], [-75, -69], [-79, -368], [62, -254], [-49, -681], [-34, -578], [75, -103], [194, -224], [76, 105], [23, -621], [-212, 4], [-114, 317], [-103, 246], [-213, 80], [-62, 302], [-170, -182], [-222, 81], [-93, 261], [-176, 53], [-131, -14], [-15, 179], [-96, 15]], [[53422, 48316], [-39, 179]], [[53609, 49076], [73, -59], [95, 221], [152, -6], [17, -163], [104, -102], [164, 361], [161, 281], [71, 185], [-10, 473], [121, 560], [127, 296], [183, 278], [32, 184], [7, 211], [45, 200], [-14, 326], [34, 510], [55, 360], [83, 308], [16, 347]], [[57603, 54843], [169, -475], [124, -70], [75, 97], [128, -38], [155, 122], [66, -246], [244, -383]], [[53309, 48928], [-228, 610]], [[53081, 49538], [212, 318], [-105, 381], [95, 144], [187, 71], [23, 255], [148, -276], [245, -25], [85, 273], [36, 382], [-31, 450], [-131, 341], [120, 667], [-69, 114], [-207, -47], [-78, 298], [21, 251]], [[29063, 51742], [-119, 136], [-137, 191], [-79, -92], [-235, 80], [-68, 248], [-52, -9], [-278, 329]], [[28095, 52625], [-37, 178], [103, 44], [-12, 288], [65, 209], [138, 38], [117, 362], [106, 302], [-102, 137], [52, 335], [-62, 526], [59, 152], [-44, 487], [-112, 306]], [[28366, 55989], [36, 280], [89, -41], [52, 171], [-64, 339], [34, 85]], [[28513, 56823], [143, -19], [209, 402], [114, 62], [3, 190], [51, 487], [159, 267], [175, 11], [22, 120], [218, -48], [218, 291], [109, 128], [134, 278], [98, -36], [73, -151], [-54, -194]], [[30185, 58611], [-178, -96], [-71, -288], [-107, -165], [-81, -215], [-34, -410], [-77, -337], [144, -39], [35, -265], [62, -126], [21, -232], [-33, -213], [10, -120], [69, -48], [66, -201], [357, 55], [161, -73], [196, -496], [112, 62], [200, -31], [158, 66], [99, -99], [-50, -311], [-62, -193], [-22, -413], [56, -383], [79, -171], [9, -129], [-140, -286], [100, -127], [74, -202], [85, -574]], [[30585, 49354], [-139, 306], [-83, 14], [179, 586], [-213, 270], [-166, -50], [-101, 100], [-153, -152], [-207, 72], [-163, 603], [-129, 149], [-89, 272], [-184, 272], [-74, -54]], [[26954, 56566], [-151, 128], [-56, 121], [32, 100], [-11, 127], [-77, 138], [-109, 113], [-95, 74], [-19, 168], [-73, 103], [18, -167], [-55, -138], [-64, 160], [-89, 57], [-38, 116], [2, 175], [36, 182], [-78, 81], [64, 111]], [[26191, 58215], [42, 74], [183, -152], [63, 75], [89, -48], [46, -119], [82, -38], [66, 122]], [[26762, 58129], [70, -313], [108, -232], [130, -246]], [[27070, 57338], [-107, -51], [1, -232], [58, -86], [-41, -68], [10, -104], [-23, -117], [-14, -114]], [[27147, 65183], [240, -41], [219, -6], [261, -197], [110, -210], [260, 65], [98, -136], [235, -356], [173, -260], [92, 8], [165, -118], [-20, -162], [205, -23], [210, -236], [-33, -135], [-185, -73], [-187, -29], [-191, 46], [-398, -56], [186, 321], [-113, 150], [-179, 38], [-96, 166], [-66, 328], [-157, -22], [-259, 154], [-83, 121], [-362, 89], [-97, 113], [104, 144], [-273, 29], [-199, -299], [-115, -8], [-40, -141], [-138, -63], [-118, 55], [146, 178], [60, 208], [126, 128], [142, 112], [210, 55], [67, 63]], [[59092, 72066], [19, 3], [40, 139], [200, -8], [253, 172], [-188, -245], [21, -108]], [[59437, 72019], [-30, 20], [-53, -44], [-42, 12], [-14, -22], [-5, 59], [-20, 35], [-54, 6], [-75, -49], [-52, 30]], [[59437, 72019], [8, -46], [-285, -234], [-136, 74], [-64, 232], [132, 21]], [[53776, 79977], [-157, 247], [-141, 139], [-30, 243], [-49, 171], [202, 125], [103, 144], [200, 111], [70, 110], [73, -66], [124, 60]], [[54171, 81261], [132, -186], [207, -50], [-17, -158], [151, -119], [41, 148], [191, -64], [26, -180], [207, -35], [127, -284]], [[55236, 80333], [-82, 0], [-43, -104], [-64, -25], [-18, -131], [-54, -28], [-7, -53], [-95, -60], [-123, 10], [-39, -127]], [[52756, 83493], [4, -222], [281, -135], [-3, -204], [283, 108], [156, 158], [313, -228], [132, -183]], [[53922, 82787], [64, -293], [-77, -154], [101, -205], [69, -308], [-22, -199], [114, -367]], [[52074, 79253], [35, 410], [140, 395], [-400, 106], [-131, 151]], [[51718, 80315], [16, 252], [-56, 130]], [[51710, 81086], [-47, 604], [167, 0], [70, 217], [69, 527], [-51, 195]], [[51918, 82629], [54, 122], [232, 31], [52, -127], [188, 284], [-63, 216], [-13, 326]], [[52368, 83481], [210, -76], [178, 88]], [[61966, 59143], [66, -178], [-9, -240], [-158, -137], [119, -158]], [[61984, 58430], [-102, -308]], [[61882, 58122], [-62, 103], [-67, -41], [-155, 9], [-4, 176], [-22, 159], [94, 269], [98, 255]], [[61764, 59052], [119, -50], [83, 141]], [[53524, 83854], [-166, -466], [-291, 325], [-39, 239], [408, 191], [88, -289]], [[52368, 83481], [-113, 320], [-8, 589], [46, 155], [80, 173], [244, 36], [98, 159], [223, 162], [-9, -296], [-82, -188], [33, -161], [151, -87], [-68, -217], [-83, 62], [-200, -415], [76, -280]], [[30080, 63183], [34, 98], [217, -3], [165, -148], [73, 14], [50, -204], [152, 11], [-9, -171], [124, -21], [136, -211], [-103, -235], [-132, 126], [-127, -25], [-92, 28], [-50, -105], [-106, -36], [-43, 140], [-92, -83], [-111, -394], [-71, 92], [-14, 165]], [[30081, 62221], [5, 157], [-71, 172], [68, 97], [21, 222], [-24, 314]], [[53333, 65346], [-952, -1097], [-804, -1132], [-392, -257]], [[51185, 62860], [-308, -56], [-3, 366], [-129, 94], [-173, 165], [-66, 270], [-937, 1256], [-937, 1257]], [[48632, 66212], [-1045, 1394]], [[47587, 67606], [6, 112], [-1, 38]], [[47592, 67756], [-2, 682], [449, 425], [277, 88], [227, 155], [107, 288], [324, 228], [12, 427], [161, 50], [126, 213], [363, 97], [51, 224], [-73, 122], [-96, 608], [-17, 350], [-104, 369]], [[49397, 72082], [267, 315], [300, 100], [175, 238], [268, 175], [471, 102], [459, 47], [140, -85], [262, 227], [297, 4], [113, -134], [190, 35]], [[52339, 73106], [-57, -295], [44, -549], [-65, -475], [-171, -322], [24, -433], [227, -344], [3, -139], [171, -232], [118, -1034]], [[52633, 69283], [90, -509], [15, -267], [-49, -470], [21, -263], [-36, -315], [24, -362], [-110, -240], [164, -420], [11, -247], [99, -321], [130, 105], [219, -267], [122, -361]], [[27693, 49869], [148, 430], [-60, 251], [-106, -267], [-166, 252], [56, 163], [-47, 522], [97, 87], [52, 359], [105, 371], [-20, 235], [153, 123], [190, 230]], [[29063, 51742], [38, -438], [-86, -374], [-303, -603], [-334, -227], [-170, -501], [-53, -389], [-157, -237], [-116, 291], [-113, 62], [-114, -45], [-8, 211], [79, 137], [-33, 240]], [[59700, 68819], [-78, -232], [-60, -435], [-75, -300], [-65, -100], [-93, 186], [-125, 257], [-198, 825], [-29, -52], [115, -608], [171, -579], [210, -897], [102, -313], [90, -325], [249, -638], [-55, -100], [9, -374], [323, -517], [49, -118]], [[60240, 64499], [-1102, 0], [-1077, 0], [-1117, 0]], [[56944, 64499], [0, 2120], [0, 2048], [-83, 464], [71, 356], [-43, 246], [101, 276]], [[56990, 70009], [369, 10], [268, -152], [275, -171], [129, -89], [214, 182], [114, 165], [245, 48], [198, -73], [75, -286], [65, 189], [222, -136], [217, -33], [137, 145]], [[59518, 69808], [182, -989]], [[61764, 59052], [-95, 187], [-114, 337], [-124, 185], [-71, 199], [-242, 231], [-191, 7], [-67, 120], [-163, -135], [-168, 261], [-87, -430], [-323, 121]], [[60119, 60135], [-30, 230], [120, 847], [27, 382], [88, 177], [204, 95], [141, 328]], [[60669, 62194], [161, -666], [77, -529], [152, -281], [379, -544], [154, -328], [151, -332], [87, -198], [136, -173]], [[47490, 75948], [14, 410], [-114, 250], [393, 415], [340, -104], [373, 4], [296, -98], [230, 30], [449, -19]], [[49471, 76836], [111, -224], [511, -262], [101, 125], [313, -261], [322, 75]], [[50829, 76289], [15, -335], [-263, -383], [-356, -122], [-25, -194], [-171, -319], [-107, -469], [108, -329], [-160, -257], [-60, -374], [-210, -115], [-197, -443], [-352, -8], [-265, 10], [-174, -203], [-106, -218], [-136, 48], [-103, 195], [-79, 331], [-259, 89]], [[47929, 73193], [-23, 191], [103, 216], [38, 156], [-96, 172], [77, 378], [-111, 345], [120, 48], [11, 272], [45, 84], [3, 449], [129, 156], [-78, 289], [-162, 20], [-47, -72], [-164, -1], [-70, 282], [-113, -84], [-101, -146]], [[56753, 85111], [32, 340], [-102, -72], [-176, 204], [-24, 331], [351, 161], [350, 83], [301, -95], [287, 17]], [[57772, 86080], [42, -100], [-198, -332], [83, -537], [-120, -183]], [[57579, 84928], [-229, 1], [-239, 214], [-121, 70], [-237, -102]], [[61882, 58122], [-61, -204], [103, -317], [102, -277], [106, -206], [909, -683], [233, 3]], [[63274, 56438], [-785, -1728], [-362, -26], [-247, -406], [-178, -10], [-76, -182]], [[61626, 54086], [-190, 0], [-112, 195], [-254, -241], [-82, -240], [-185, 45], [-62, 67], [-65, -16], [-87, 6], [-352, 489], [-193, 0], [-95, 189], [0, 324], [-145, 96]], [[59804, 55000], [-164, 627], [-127, 133], [-48, 231], [-141, 280], [-171, 42], [95, 328], [147, 14], [42, 176]], [[59437, 56831], [-4, 517]], [[59433, 57348], [82, 603], [132, 161], [28, 236], [119, 440], [168, 285], [112, 567], [45, 495]], [[57942, 91602], [-41, -403], [425, -383], [-256, -435], [323, -655], [-187, -494], [250, -429], [-113, -375], [411, -394], [-105, -294], [-258, -333], [-594, -735]], [[57797, 86672], [-504, -46], [-489, -211], [-452, -121], [-161, 314], [-269, 189], [62, 567], [-135, 520], [133, 335], [252, 362], [635, 624], [185, 121], [-28, 243], [-387, 272]], [[56639, 89841], [-93, 225], [-8, 886], [-433, 392], [-371, 282]], [[55734, 91626], [167, 152], [309, -304], [362, 29], [298, -140], [265, 255], [137, 422], [431, 196], [356, -229], [-117, -405]], [[99547, 41844], [96, -167], [-46, -300], [-172, -79], [-153, 71], [-27, 253], [107, 198], [126, -71], [69, 95]], [[0, 42577], [57, 26], [-34, -277], [-23, -31], [99822, -141], [-177, -122], [-36, 215], [139, 118], [88, 32], [-99836, 180]], [[33000, 21970], [333, 345], [236, -144], [167, 231], [222, -259], [-83, -202], [-375, -173], [-125, 202], [-236, -259], [-139, 259]], [[34854, 53161], [70, 246], [24, 262], [48, 246], [-107, 340]], [[34889, 54255], [-22, 394], [144, 495]], [[35011, 55144], [95, -63], [204, -136], [294, -486], [46, -236]], [[52655, 76104], [-92, -445], [-126, 118], [-64, 387], [56, 214], [179, 220], [47, -494]], [[51576, 80352], [62, -50], [80, 13]], [[51900, 78315], [-11, -163], [82, -216], [-97, -176], [72, -445], [151, -73], [-32, -250]], [[52065, 76992], [-252, -326], [-548, 156], [-404, -186], [-32, -347]], [[49471, 76836], [144, 345], [53, 1147], [-287, 605], [-205, 291], [-424, 222], [-28, 420], [360, 125], [466, -148], [-88, 652], [263, -247], [646, 449], [84, 472], [243, 116]], [[53081, 49538], [-285, 581], [-184, 475], [-169, 595], [9, 192], [61, 184], [67, 419], [56, 427]], [[52636, 52411], [94, 33], [404, -6], [-2, 693]], [[48278, 82851], [-210, 118], [-172, -8], [57, 309], [-57, 309]], [[47896, 83579], [233, 23], [298, -356], [-149, -395]], [[49165, 85596], [-297, -623], [283, 79], [304, -3], [-72, -469], [-250, -516], [287, -37], [22, -61], [248, -679], [190, -93], [171, -656], [79, -227], [337, -110], [-34, -368], [-142, -169], [111, -298], [-250, -302], [-371, 6], [-473, -159], [-130, 114], [-183, -270], [-257, 65], [-195, -220], [-148, 115], [407, 605], [249, 125], [-2, 0], [-434, 96], [-79, 229], [291, 179], [-152, 310], [52, 377], [413, -52], [1, 0], [40, 334], [-186, 355], [-4, 8], [-337, 101], [-66, 156], [101, 258], [-92, 158], [-149, -272], [-17, 555], [-140, 294], [101, 595], [216, 467], [222, -45], [335, 48]], [[61542, 75749], [42, 246], [-70, 393], [-160, 212], [-154, 66], [-102, 177]], [[61098, 76843], [34, 68], [235, -99], [409, -93], [378, -276], [48, -107], [169, 90], [259, -120], [85, -236], [175, -134]], [[62106, 75494], [-268, 282], [-296, -27]], [[50294, 55244], [-436, -337], [-154, -198], [-250, -167], [-248, 164]], [[50006, 58175], [-20, -180], [116, -297], [-1, -418], [27, -454], [69, -210], [-61, -518], [22, -287], [74, -365], [62, -202]], [[47655, 56256], [-78, 14], [-57, -232], [-78, 3], [-55, 123], [19, 231], [-116, 353], [-73, -65], [-59, -13]], [[47158, 56670], [-77, -33], [3, 211], [-44, 151], [9, 168], [-60, 242], [-78, 206], [-222, 0], [-65, -108], [-76, -13], [-48, -125], [-32, -159], [-148, -254]], [[46320, 56956], [-122, 341], [-108, 226], [-71, 74], [-69, 115], [-32, 254], [-41, 127], [-80, 94]], [[45797, 58187], [123, 281], [84, -11], [73, 97], [61, 1], [44, 76], [-24, 191], [31, 60], [5, 195]], [[46194, 59077], [134, -5], [200, -141], [61, 13], [21, 64], [151, -45], [40, 32]], [[46801, 58995], [16, -211], [44, 1], [73, 77], [46, -20], [77, -146], [119, -46], [76, 125], [90, 77], [67, 80], [55, -15], [62, -126], [33, -159], [114, -241], [-57, -149], [-11, -187], [59, 57], [35, -67], [-15, -172], [85, -166]], [[45321, 59403], [36, 255]], [[45357, 59658], [302, 17], [63, 136], [88, 10], [110, -142], [86, -3], [92, 97], [56, -166], [-120, -130], [-121, 11], [-119, 121], [-103, -133], [-50, -5], [-67, -80], [-253, 12]], [[45797, 58187], [-149, 241], [-117, 38], [-63, 162], [1, 88], [-84, 122], [-18, 124]], [[45367, 58962], [147, 93], [92, -18], [75, 65], [513, -25]], [[52636, 52411], [-52, 87], [96, 647]], [[56583, 72391], [152, -194], [216, 33], [207, -41], [-7, -100], [151, 69], [-35, -170], [-400, -49], [3, 95], [-339, 112], [52, 245]], [[57237, 75339], [-169, 17], [-145, 54], [-336, -150], [192, -323], [-141, -94], [-154, -1], [-147, 297], [-52, -127], [62, -344], [139, -270], [-105, -126], [155, -265], [137, -167], [4, -326], [-257, 153], [82, -294], [-176, -60], [105, -509], [-184, -7], [-228, 251], [-104, 460], [-49, 384], [-108, 264], [-143, 329], [-18, 164]], [[55838, 75350], [182, 51], [106, 126], [150, -11], [46, 100], [53, 19]], [[57254, 75917], [135, -153], [-86, -360], [-66, -65]], [[37010, 99413], [932, 344], [975, -26], [354, 213], [982, 55], [2219, -72], [1737, -457], [-513, -222], [-1062, -25], [-1496, -56], [140, -103], [984, 63], [836, -198], [540, 176], [231, -206], [-305, -335], [707, 214], [1348, 223], [833, -111], [156, -246], [-1132, -410], [-157, -133], [-888, -99], [643, -28], [-324, -420], [-224, -373], [9, -641], [333, -376], [-434, -24], [-457, -182], [513, -305], [65, -490], [-297, -53], [360, -495], [-617, -42], [322, -234], [-91, -203], [-391, -89], [-388, -2], [348, -390], [4, -256], [-549, 238], [-143, -154], [375, -144], [364, -352], [105, -464], [-495, -111], [-214, 222], [-344, 331], [95, -391], [-322, -303], [732, -24], [383, -31], [-745, -502], [-755, -454], [-813, -199], [-306, -2], [-288, -222], [-386, -608], [-597, -404], [-192, -23], [-370, -142], [-399, -134], [-238, -357], [-4, -403], [-141, -378], [-453, -461], [112, -450], [-125, -476], [-142, -563], [-391, -35], [-410, 471], [-556, 3], [-269, 315], [-186, 563], [-481, 716], [-141, 375], [-38, 517], [-384, 532], [100, 424], [-186, 203], [275, 673], [418, 214], [110, 241], [58, 450], [-318, -204], [-151, -85], [-249, -83], [-341, 188], [-19, 392], [109, 306], [258, 8], [567, -153], [-478, 366], [-249, 197], [-276, -81], [-232, 143], [310, 536], [-169, 215], [-220, 398], [-335, 611], [-353, 223], [3, 241], [-745, 337], [-590, 42], [-743, -23], [-677, -42], [-323, 183], [-482, 362], [729, 181], [559, 31], [-1188, 149], [-627, 236], [39, 223], [1051, 277], [1018, 277], [107, 210], [-750, 206], [243, 230], [961, 402], [404, 62], [-115, 258], [658, 152], [854, 90], [853, 6], [303, -180], [737, 317], [663, -215], [390, -45], [577, -188], [-660, 311], [38, 246]], [[24973, 59739], [-142, 101], [-174, 10], [-127, 114], [-149, 238]], [[24381, 60202], [7, 168], [32, 135], [-39, 107], [133, 470], [357, 1], [7, 197], [-45, 35], [-31, 124], [-103, 133], [-103, 193], [125, 1], [1, 324], [259, 1], [257, -6]], [[25297, 60979], [90, -105], [24, 86], [82, -73]], [[25493, 60887], [-127, -220], [-131, -161], [-20, -111], [22, -113], [-58, -146]], [[25179, 60136], [-65, -36], [15, -67], [-52, -64], [-95, -145], [-9, -85]], [[33400, 56648], [183, -212], [171, -375], [8, -297], [105, -13], [149, -281], [109, -201]], [[34125, 55269], [-44, -518], [-169, -150], [15, -136], [-51, -297], [123, -418], [89, -1], [37, -325], [169, -501]], [[33129, 54824], [-188, 437], [75, 159], [-5, 265], [171, 93], [69, 108], [-95, 213], [24, 210], [220, 339]], [[25745, 59307], [-48, 180], [-84, 50]], [[25613, 59537], [19, 231], [-38, 62], [-57, 41], [-122, -68], [-10, 77], [-84, 93], [-60, 114], [-82, 49]], [[25493, 60887], [29, -23], [61, 101], [79, 9], [26, -47], [43, 28], [129, -52], [128, 15], [90, 64], [32, 65], [89, -30], [66, -39], [73, 13], [55, 50], [127, -80], [44, -13], [85, -107], [80, -129], [101, -88], [73, -159]], [[26903, 60465], [-95, 12], [-38, -79], [-97, -75], [-70, 0], [-61, -73], [-56, 26], [-47, 88], [-29, -17], [-36, -138], [-27, 5], [-4, -118], [-97, -159], [-51, -68], [-29, -72], [-82, 117], [-60, -154], [-58, 4], [-65, -14], [6, -283], [-41, -5], [-35, -131], [-86, -24]], [[55230, 78267], [67, -223], [89, -164], [-107, -217]], [[55155, 76391], [-31, -98]], [[55124, 76293], [-261, 213], [-161, 207], [-254, 171], [-233, 424], [56, 43], [-127, 242], [-5, 195], [-179, 91], [-85, -249], [-82, 193], [6, 200], [10, 9]], [[53809, 78032], [194, -20], [51, 98], [94, -94], [109, -12], [-1, 161], [97, 59], [27, 233], [221, 153]], [[54601, 78610], [88, -71], [208, -247], [229, -111], [104, 86]], [[30081, 62221], [-185, 98], [-131, -40], [-169, 42], [-130, -108], [-149, 179], [24, 186], [256, -80], [210, -46], [100, 128], [-127, 250], [2, 220], [-175, 89], [62, 159], [170, -25], [241, -90]], [[54716, 79543], [141, -148], [103, -62], [233, 70], [22, 116], [111, 17], [135, 89], [30, -37], [130, 72], [66, 136], [91, 35], [297, -175], [59, 59]], [[56134, 79715], [155, -157], [19, -154]], [[56308, 79404], [-170, -121], [-131, -391], [-168, -390], [-223, -109]], [[55616, 78393], [-173, 26], [-213, -152]], [[54601, 78610], [-54, 194], [-47, 7]], [[83531, 45933], [-117, -11], [-368, 403], [259, 113], [146, -175], [97, -175], [-17, -155]], [[84713, 46708], [28, -113], [5, -175]], [[84746, 46420], [-181, -430], [-238, -127], [-33, 69], [25, 196], [119, 351], [275, 229]], [[82749, 47167], [100, -153], [172, 47], [69, -245], [-321, -116], [-193, -77], [-149, 4], [95, 332], [153, 5], [74, 203]], [[84139, 47168], [-41, -320], [-417, -163], [-370, 71], [0, 210], [220, 120], [174, -173], [185, 44], [249, 211]], [[80172, 47926], [533, -57], [61, 237], [515, -277], [101, -373], [417, -105], [341, -342], [-317, -220], [-306, 232], [-251, -15], [-288, 42], [-260, 104], [-322, 220], [-204, 57], [-116, -72], [-506, 237], [-48, 247], [-255, 43], [191, 550], [337, -34], [224, -225], [115, -44], [38, -205]], [[87423, 48251], [-143, -393], [-27, 434], [49, 207], [58, 195], [63, -169], [0, -274]], [[85346, 49837], [-104, -191], [-192, 106], [-54, 248], [281, 27], [69, -190]], [[86241, 50048], [101, -441], [-234, 238], [-232, 48], [-157, -38], [-192, 20], [65, 317], [344, 24], [305, -168]], [[89166, 50332], [5, -1877], [4, -1876]], [[89175, 46579], [-247, 472], [-282, 116], [-69, -164], [-352, -18], [118, 469], [175, 160], [-72, 626], [-134, 483], [-538, 488], [-229, 48], [-417, 532], [-82, -279], [-107, -51], [-63, 211], [-1, 250], [-212, 283], [299, 207], [198, -11], [-23, 153], [-407, 1], [-110, 343], [-248, 106], [-117, 285], [374, 140], [142, 188], [446, -237], [44, -214], [78, -931], [287, -345], [232, 611], [319, 347], [247, 1], [238, -201], [206, -206], [298, -110]], [[84788, 52647], [-223, -571], [-209, -111], [-267, 113], [-463, -29], [-243, -83], [-39, -436], [248, -512], [150, 261], [518, 196], [-22, -265], [-121, 83], [-121, -337], [-245, -223], [263, -738], [-50, -198], [249, -665], [-2, -378], [-148, -170], [-109, 203], [134, 471], [-273, -222], [-69, 159], [36, 222], [-200, 338], [21, 561], [-186, -175], [24, -671], [11, -824], [-176, -84], [-119, 169], [79, 530], [-43, 556], [-117, 4], [-86, 395], [115, 377], [40, 457], [139, 868], [58, 238], [237, 427], [217, -170], [350, -80], [319, 24], [275, 419], [48, -129]], [[85746, 52481], [-15, -503], [-143, 57], [-42, -351], [114, -304], [-78, -69], [-112, 365], [-82, 736], [56, 460], [92, 210], [20, -315], [164, -50], [26, -236]], [[80461, 52985], [47, -385], [190, -325], [179, 117], [177, -42], [162, 291], [133, 51], [263, -162], [226, 123], [143, 801], [107, 200], [96, 655], [319, 0], [241, -97]], [[82744, 54212], [-158, -520], [204, -545], [-48, -265], [312, -533], [-329, -68], [-93, -393], [12, -522], [-267, -393], [-7, -574], [-107, -881], [-41, 205], [-316, -259], [-110, 352], [-198, 33], [-139, 184], [-330, -207], [-101, 279], [-182, -32], [-229, 67], [-43, 772], [-138, 160], [-134, 493], [-38, 504], [32, 533], [165, 383]], [[79393, 48459], [-308, -12], [-234, 481], [-356, 471], [-119, 349], [-210, 469], [-138, 432], [-212, 806], [-244, 480], [-81, 495], [-103, 449], [-250, 363], [-145, 493], [-209, 322], [-290, 635], [-24, 293], [178, -23], [430, -111], [246, -564], [215, -390], [153, -240], [263, -619], [283, -9], [233, -394], [161, -482], [211, -263], [-111, -471], [159, -200], [100, -14], [47, -402], [97, -321], [204, -51], [135, -365], [-70, -716], [-11, -891]], [[72530, 69211], [-176, -261], [-108, -538], [269, -218], [262, -283], [362, -323], [381, -75], [160, -293], [215, -54], [334, -135], [231, 10], [32, 228], [-36, 366], [21, 248]], [[77035, 68105], [20, -219], [-97, -105], [23, -355], [-199, 104], [-359, -397], [8, -330], [-153, -483], [-14, -281], [-124, -474], [-217, 131], [-11, -596], [-63, -196], [30, -245], [-137, -137]], [[74730, 64531], [-39, -210], [-189, 7], [-343, -120], [16, -433], [-148, -341], [-400, -387], [-311, -678], [-209, -363], [-276, -377], [-1, -265], [-138, -142], [-251, -206], [-129, -31], [-84, -439], [58, -749], [15, -478], [-118, -547], [-1, -978], [-144, -28], [-126, -439], [84, -190], [-253, -163], [-93, -392], [-112, -165], [-263, 537], [-128, 807], [-107, 581], [-97, 272], [-148, 553], [-69, 720], [-48, 360], [-253, 791], [-115, 1116], [-83, 737], [1, 698], [-54, 539], [-404, -345], [-196, 69], [-362, 698], [133, 208], [-82, 226], [-326, 489]], [[68937, 65473], [185, 384], [612, -1], [-56, 494], [-156, 292], [-31, 444], [-182, 258], [306, 604], [323, -44], [290, 604], [174, 584], [270, 578], [-4, 411], [236, 333], [-224, 284], [-96, 390], [-99, 504], [137, 249], [421, -141], [310, 86], [268, 484]], [[48278, 82851], [46, -412], [-210, -514], [-493, -340], [-393, 87], [225, 601], [-145, 586], [378, 451], [210, 269]], [[64978, 73251], [244, 112], [197, 329], [186, -17], [122, 108], [197, -53], [308, -292], [221, -63], [318, -510], [207, -21], [24, -484]], [[66909, 69007], [137, -302], [112, -348], [266, -253], [7, -508], [133, -93], [23, -265], [-400, -298], [-105, -669]], [[67082, 66271], [-523, 174], [-303, 133], [-313, 74], [-118, 707], [-133, 102], [-214, -103], [-280, -279], [-339, 191], [-281, 443], [-267, 164], [-186, 546], [-205, 768], [-149, -93], [-177, 190], [-104, -224]], [[63490, 69064], [-153, 302], [-3, 307], [-89, 0], [46, 417], [-143, 438], [-340, 315], [-193, 548], [65, 449], [139, 199], [-21, 336], [-182, 173], [-180, 687]], [[62436, 73235], [-152, 461], [55, 179], [-87, 660], [190, 164]], [[63578, 73897], [88, -424], [263, -120], [193, -289], [395, -100], [434, 153], [27, 134]], [[63490, 69064], [-164, 28]], [[63326, 69092], [-187, 48], [-204, -553]], [[62935, 68587], [-516, 46], [-784, 1158], [-413, 403], [-335, 156]], [[60887, 70350], [-112, 701]], [[60775, 71051], [615, 600], [105, 696], [-26, 421], [152, 142], [142, 359]], [[61763, 73269], [119, 90], [324, -75], [97, -146], [133, 97]], [[45969, 90100], [-64, -373], [314, -392], [-361, -440], [-801, -394], [-240, -105], [-365, 85], [-775, 182], [273, 254], [-605, 282], [492, 112], [-12, 169], [-583, 134], [188, 375], [421, 85], [433, -391], [422, 314], [349, -163], [453, 307], [461, -41]], [[59922, 70666], [-49, -182]], [[59873, 70484], [-100, 80], [-58, -383], [69, -65], [-71, -79], [-12, -152], [131, 78]], [[59832, 69963], [7, -224], [-139, -920]], [[59518, 69808], [80, 190], [-19, 32], [74, 270], [56, 434], [40, 146], [8, 6]], [[59757, 70886], [93, -1], [25, 101], [75, 7]], [[59950, 70993], [4, -236], [-38, -87], [6, -4]], [[54311, 73846], [-100, -453], [41, -179], [-58, -296], [-213, 217], [-141, 62], [-387, 293], [38, 296], [325, -53], [284, 63], [211, 50]], [[52558, 75561], [166, -408], [-39, -762], [-126, 36], [-113, -192], [-105, 153], [-11, 694], [-64, 330], [153, -29], [139, 178]], [[53835, 78613], [-31, -283], [67, -246]], [[53871, 78084], [-221, 84], [-226, -204], [15, -286], [-34, -164], [91, -293], [261, -290], [140, -476], [309, -464], [217, 3], [68, -127], [-78, -115], [249, -208], [204, -174], [238, -301], [29, -107], [-52, -206], [-154, 268], [-242, 95], [-116, -372], [200, -214], [-33, -300], [-116, -34], [-148, -494], [-116, -45], [1, 176], [57, 309], [60, 123], [-108, 334], [-85, 290], [-115, 72], [-82, 249], [-179, 104], [-120, 232], [-206, 37], [-217, 260], [-254, 375], [-189, 332], [-86, 569], [-138, 67], [-226, 190], [-128, -78], [-161, -267], [-115, -42]], [[28453, 62478], [187, -52], [147, -138], [46, -158], [-195, -11], [-84, -96], [-156, 92], [-159, 210], [34, 132], [116, 40], [64, -19]], [[59922, 70666], [309, -228], [544, 613]], [[60887, 70350], [-53, -87], [-556, -289], [277, -575], [-92, -98], [-46, -193], [-212, -80], [-66, -207], [-120, -177], [-310, 91]], [[59709, 68735], [-9, 84]], [[59832, 69963], [41, 169], [0, 352]], [[87399, 71495], [35, -197], [-156, -349], [-114, 185], [-143, -134], [-73, -337], [-181, 164], [2, 273], [154, 344], [158, -67], [114, 242], [204, -124]], [[89159, 73219], [-104, -460], [48, -288], [-145, -406], [-355, -271], [-488, -36], [-396, -657], [-186, 221], [-12, 431], [-483, -127], [-329, -271], [-325, -11], [282, -424], [-186, -979], [-179, -242], [-135, 224], [69, 519], [-176, 167], [-113, 395], [263, 177], [145, 362], [280, 298], [203, 394], [553, 171], [297, -117], [291, 1024], [185, -275], [408, 575], [158, 224], [174, 704], [-47, 648], [117, 364], [295, 105], [152, -798], [-9, -467], [-256, -580], [4, -594]], [[89974, 77268], [195, -122], [197, 244], [62, -647], [-412, -157], [-244, -572], [-436, 393], [-152, -630], [-308, -9], [-39, 573], [138, 443], [296, 32], [81, 797], [83, 449], [326, -600], [213, -194]], [[69711, 76170], [-159, -107], [-367, -401], [-121, -412], [-104, -4], [-76, 273], [-353, 18], [-57, 472], [-135, 4], [21, 578], [-333, 421], [-476, -45], [-326, -84], [-265, 519], [-227, 218], [-431, 412], [-52, 50], [-715, -340], [11, -2124]], [[65546, 75618], [-142, -28], [-195, 452], [-188, 161], [-315, -120], [-123, -191]], [[64583, 75892], [-15, 140], [68, 240], [-53, 201], [-322, 196], [-125, 517], [-154, 146], [-9, 187], [270, -54], [11, 421], [236, 93], [243, -86], [50, 562], [-50, 356], [-278, -28], [-236, 141], [-321, -253], [-259, -121]], [[63639, 78550], [-142, 93], [29, 296], [-177, 385], [-207, -16], [-235, 391], [160, 436], [-81, 118], [222, 632], [285, -334], [35, 421], [573, 626], [434, 15], [612, -399], [329, -233], [295, 243], [440, 12], [356, -298], [80, 170], [391, -24], [69, 272], [-450, 396], [267, 281], [-52, 157], [266, 150], [-200, 394], [127, 197], [1039, 200], [136, 142], [695, 213], [250, 239], [499, -124], [88, -597], [290, 140], [356, -197], [-23, -314], [267, 33], [696, 543], [-102, -180], [355, -445], [620, -1463], [148, 302], [383, -332], [399, 148], [154, -104], [133, -332], [194, -112], [119, -244], [358, 77], [147, -353]], [[72294, 76218], [-171, 84], [-140, 207], [-412, 61], [-461, 15], [-100, -63], [-396, 242], [-158, -119], [-43, -340], [-457, 198], [-183, -81], [-62, -252]], [[61551, 50860], [-195, -230], [-68, -240], [-104, -42], [-40, -406], [-89, -233], [-54, -383], [-112, -190]], [[60889, 49136], [-399, 576], [-19, 334], [-1007, 1173], [-47, 63]], [[59417, 51282], [-3, 611], [80, 233], [137, 381], [101, 420], [-123, 661], [-32, 289], [-132, 400]], [[59445, 54277], [171, 344], [188, 379]], [[61626, 54086], [-243, -653], [3, -2098], [165, -475]], [[70465, 74537], [-526, -87], [-343, 187], [-301, -45], [26, 332], [303, -96], [101, 177]], [[69725, 75005], [212, -56], [355, 414], [-329, 304], [-198, -144], [-205, 217], [234, 373], [-83, 57]], [[78495, 58847], [-66, 696], [178, 479], [359, 110], [261, -83]], [[79227, 60049], [229, -226], [126, 397], [246, -212]], [[79828, 60008], [64, -384], [-34, -690], [-467, -443], [122, -349], [-292, -42], [-240, -232]], [[78981, 57868], [-233, 84], [-112, 301], [-141, 594]], [[85652, 74065], [240, -679], [68, -373], [3, -664], [-105, -316], [-252, -111], [-222, -239], [-250, -49], [-31, 313], [51, 432], [-122, 600], [206, 97], [-190, 493]], [[85048, 73569], [17, 52], [124, -21], [108, 260], [197, 28], [118, 38], [40, 139]], [[55575, 76355], [52, 129]], [[55627, 76484], [66, 42], [38, 191], [50, 32], [40, -81], [52, -36], [36, -92], [46, -27], [54, -107], [39, 3], [-31, -140], [-33, -68], [9, -43]], [[55993, 76158], [-62, -23], [-164, -89], [-13, -118], [-35, 5]], [[63326, 69092], [58, -254], [-25, -132], [89, -434]], [[63448, 68272], [-196, -15], [-69, 274], [-248, 56]], [[79227, 60049], [90, 260], [12, 487], [-224, 502], [-18, 568], [-211, 468], [-210, 40], [-56, -201], [-163, -17], [-83, 102], [-293, -344], [-6, 517], [68, 606], [-188, 27], [-16, 346], [-120, 178]], [[77809, 63588], [59, 212], [237, 374]], [[78380, 64766], [162, -454], [125, -524], [342, -4], [108, -502], [-178, -151], [-80, -207], [333, -345], [231, -680], [175, -508], [210, -400], [70, -407], [-50, -576]], [[59757, 70886], [99, 469], [138, 406], [5, 20]], [[59999, 71781], [125, -30], [45, -226], [-151, -217], [-68, -315]], [[47857, 54343], [-73, -5], [-286, 274], [-252, 439], [-237, 315], [-187, 371]], [[46822, 55737], [66, 184], [15, 168], [126, 313], [129, 268]], [[54125, 64996], [-197, -214], [-156, 316], [-439, 248]], [[52633, 69283], [136, 133], [24, 244], [-30, 238], [191, 222], [86, 185], [135, 165], [16, 442]], [[53191, 70912], [326, -198], [117, 50], [232, -96], [368, -258], [130, -512], [250, -111], [391, -242], [296, -286], [136, 150], [133, 264], [-65, 442], [87, 280], [200, 270], [192, 78], [375, -118], [95, -257], [104, -3], [88, -98], [276, -67], [68, -191]], [[56944, 64499], [0, -1150], [-320, -2], [-3, -242]], [[56621, 63105], [-1108, 1103], [-1108, 1103], [-280, -315]], [[72718, 56162], [-42, -600], [-116, -164], [-242, -132], [-132, 458], [-49, 828], [126, 935], [192, -320], [129, -406], [134, -599]], [[58049, 35154], [96, -173], [-85, -281], [-47, -187], [-155, -90], [-51, -184], [-99, -58], [-209, 443], [148, 365], [151, 225], [130, 118], [121, -178]], [[56314, 83116], [-23, 147], [30, 157], [-123, 92], [-291, 100]], [[55907, 83612], [-59, 485]], [[55848, 84097], [318, 176], [466, -37], [273, 57], [39, -120], [148, -37], [267, -279]], [[56523, 82877], [-67, 177], [-142, 62]], [[55848, 84097], [10, 433], [136, 362], [262, 196], [221, -430], [223, 11], [53, 442]], [[57579, 84928], [134, -133], [24, -279], [89, -340]], [[47592, 67756], [-42, 0], [7, -308], [-172, -19], [-90, -131], [-126, 0], [-100, 75], [-234, -62], [-91, -449], [-86, -42], [-131, -726], [-386, -621], [-92, -796], [-114, -258], [-33, -208], [-625, -46], [-5, 1]], [[45272, 64166], [13, 267], [106, 157], [91, 300], [-18, 195], [96, 406], [155, 366], [93, 93], [74, 336], [6, 307], [100, 356], [185, 210], [177, 588], [5, 8], [139, 221], [259, 64], [218, 393], [140, 154], [232, 481], [-70, 716], [106, 495], [37, 304], [179, 389], [278, 263], [206, 238], [186, 596], [87, 354], [205, -3], [167, -244], [264, 39], [288, -127], [121, -6]], [[57394, 79599], [66, 85], [185, 57], [204, -180], [115, -21], [125, -155], [-20, -195], [101, -95], [40, -240], [97, -147], [-19, -86], [52, -58], [-74, -43], [-164, 17], [-27, 80], [-58, -46], [20, -103], [-76, -184], [-49, -197], [-70, -63]], [[57842, 78025], [-50, 263], [30, 246], [-9, 253], [-160, 342], [-89, 243], [-86, 171], [-84, 56]], [[63761, 44648], [74, -245], [69, -380], [45, -693], [72, -269], [-28, -277], [-49, -169], [-94, 338], [-53, -171], [53, -427], [-24, -244], [-77, -133], [-18, -488], [-109, -671], [-137, -793], [-172, -1092], [-106, -800], [-125, -668], [-226, -136], [-243, -244], [-160, 147], [-220, 206], [-77, 304], [-18, 510], [-98, 460], [-26, 414], [50, 415], [128, 100], [1, 191], [133, 437], [25, 367], [-65, 272], [-52, 364], [-23, 530], [97, 322], [38, 366], [138, 21], [155, 118], [103, 104], [122, 8], [158, 328], [229, 355], [83, 289], [-38, 247], [118, -70], [153, 401], [6, 346], [92, 257], [96, -247]], [[23016, 66727], [-107, -505], [-49, -415], [-20, -771], [-27, -281], [48, -315], [86, -280], [56, -447], [184, -429], [65, -328], [109, -284], [295, -153], [114, -241], [244, 161], [212, 58], [208, 104], [175, 99], [176, 235], [67, 336], [22, 483], [48, 169], [188, 151], [294, 133], [246, -20], [169, 49], [66, -122], [-9, -278], [-149, -342], [-66, -351], [51, -100], [-42, -249], [-69, -449], [-71, 148], [-58, -10]], [[24381, 60202], [-314, 620], [-144, 187], [-226, 150], [-156, -42], [-223, -216], [-140, -57], [-196, 152], [-208, 109], [-260, 264], [-208, 81], [-314, 268], [-233, 275], [-70, 154], [-155, 34], [-284, 183], [-116, 262], [-299, 327], [-139, 363], [-66, 281], [93, 56], [-29, 164], [64, 150], [1, 199], [-93, 259], [-25, 229], [-94, 290], [-244, 573], [-280, 450], [-135, 359], [-238, 235], [-51, 140], [42, 356], [-142, 135], [-164, 279], [-69, 402], [-149, 47], [-162, 303], [-130, 281], [-12, 180], [-149, 434], [-99, 441], [5, 221], [-201, 229], [-93, -26], [-159, 159], [-44, -234], [46, -276], [27, -433], [95, -237], [206, -397], [46, -135], [42, -41], [37, -198], [49, 8], [56, -372], [85, -146], [59, -204], [174, -293], [92, -536], [83, -252], [77, -270], [15, -304], [134, -19], [112, -261], [100, -257], [-6, -104], [-117, -211], [-49, 3], [-74, 350], [-181, 328], [-201, 278], [-142, 147], [9, 421], [-42, 312], [-132, 179], [-191, 257], [-37, -75], [-70, 151], [-171, 139], [-164, 334], [20, 44], [115, -33], [103, 215], [10, 260], [-214, 411], [-163, 159], [-102, 360], [-103, 377], [-129, 461], [-113, 518]], [[17464, 70566], [316, 44], [353, 63], [-26, -113], [419, -280], [634, -406], [552, 5], [221, 0], [0, 237], [481, 0], [102, -204], [142, -182], [165, -253], [92, -301], [69, -317], [144, -174], [230, -172], [175, 455], [227, 11], [196, -230], [139, -394], [96, -338], [164, -328], [61, -403], [78, -271], [217, -178], [197, -127], [108, 17]], [[55993, 76158], [95, 33], [128, 10]], [[46619, 60247], [93, 105], [47, 339], [88, 13], [194, -160], [157, 114], [107, -38], [42, 128], [1114, 8], [62, 404], [-48, 71], [-134, 2485], [-134, 2485], [425, 11]], [[51185, 62860], [1, -1326], [-152, -384], [-24, -355], [-247, -92], [-379, -49], [-102, -205], [-178, -22]], [[46801, 58995], [13, 179], [-24, 223], [-104, 162], [-54, 330], [-13, 358]], [[77375, 57550], [-27, 427], [86, 441], [-94, 341], [23, 627], [-113, 299], [-90, 689], [-50, 727], [-121, 477], [-183, -289], [-315, -410], [-156, 51], [-172, 135], [96, 714], [-58, 539], [-218, 664], [34, 208], [-163, 74], [-197, 469]], [[77809, 63588], [-159, -134], [-162, -249], [-196, -26], [-127, -623], [-117, -104], [134, -506], [177, -420], [113, -380], [-101, -501], [-96, -106], [66, -289], [185, -458], [32, -321], [-4, -268], [108, -525], [-152, -537], [-135, -591]], [[55380, 75946], [-58, 44], [-78, 188], [-120, 115]], [[55338, 76894], [74, -99], [40, -80], [91, -62], [106, -119], [-22, -50]], [[74375, 80219], [292, 99], [530, 496], [423, 271], [242, -176], [289, -9], [186, -269], [277, -21], [402, -144], [270, 401], [-113, 339], [288, 596], [311, -238], [252, -67], [327, -148], [53, -432], [394, -242], [263, 107], [351, 75], [279, -76], [272, -276], [168, -295], [258, 6], [350, -94], [255, 143], [366, 96], [407, 405], [166, -62], [146, -193], [331, 48]], [[59599, 45195], [209, 47], [334, -163], [73, 73], [193, 15], [99, 173], [167, -10], [303, 224], [221, 334]], [[61198, 45888], [45, -258], [-11, -574], [34, -505], [11, -900], [49, -282], [-83, -412], [-108, -400], [-177, -357], [-254, -219], [-313, -279], [-313, -618], [-107, -106], [-194, -409], [-115, -133], [-23, -411], [132, -436], [54, -337], [4, -173], [49, 29], [-8, -565], [-45, -267], [65, -99], [-41, -239], [-116, -205], [-229, -195], [-334, -312], [-122, -213], [24, -242], [71, -39], [-24, -303]], [[59119, 36429], [-211, 5]], [[58908, 36434], [-24, 254], [-41, 259]], [[58843, 36947], [-23, 206], [49, 642], [-72, 410], [-133, 810]], [[58664, 39015], [292, 654], [74, 415], [42, 52], [31, 339], [-45, 171], [12, 430], [54, 400], [0, 728], [-145, 185], [-132, 42], [-60, 143], [-128, 121], [-232, -11], [-18, 215]], [[58409, 42899], [-26, 410], [843, 474]], [[59226, 43783], [159, -276], [77, 53], [110, -146], [16, -231], [-59, -268], [21, -405], [181, -356], [85, 399], [120, 122], [-24, 740], [-116, 417], [-100, 185], [-97, -8], [-77, 748], [77, 438]], [[46619, 60247], [-184, 395], [-168, 424], [-184, 153], [-133, 169], [-155, -6], [-135, -126], [-138, 50], [-96, -185]], [[45426, 61121], [-24, 311], [78, 283], [34, 543], [-30, 569], [-34, 286], [28, 287], [-72, 274], [-146, 249]], [[45260, 63923], [60, 192], [1088, -4], [-53, 832], [68, 296], [261, 51], [-9, 1474], [911, -30], [1, 872]], [[59226, 43783], [-147, 149], [85, 535], [87, 201], [-53, 477], [56, 467], [47, 156], [-71, 489], [-131, 257]], [[59099, 46514], [273, -108], [55, -159], [95, -269], [77, -783]], [[78372, 55412], [64, -54], [164, -347], [116, -386], [16, -388], [-29, -262], [27, -198], [20, -340], [98, -159], [109, -509], [-5, -195], [-197, -38], [-263, 426], [-329, 457], [-32, 294], [-161, 385], [-38, 477], [-100, 314], [30, 419], [-61, 244]], [[77801, 55552], [48, 103], [227, -252], [22, -296], [183, 69], [91, 236]], [[80461, 52985], [204, -198], [214, 108], [56, 488], [119, 108], [333, 125], [199, 456], [137, 364]], [[82069, 54967], [214, 400], [140, 450], [112, 2], [143, -291], [13, -251], [183, -160], [231, -173], [-20, -226], [-186, -29], [50, -281], [-205, -196]], [[54540, 35373], [-207, 435], [-108, 420], [-62, 561], [-68, 417], [-93, 887], [-7, 689], [-35, 314], [-108, 237], [-144, 476], [-146, 691], [-60, 361], [-226, 563], [-17, 441]], [[56448, 41738], [228, 131], [180, -33], [109, -130], [2, -48]], [[55526, 37566], [0, -2127], [-248, -294], [-149, -42], [-175, 108], [-125, 42], [-47, 247], [-109, 157], [-133, -284]], [[96049, 39690], [228, -357], [144, -265], [-105, -138], [-153, 155], [-199, 259], [-179, 306], [-184, 406], [-38, 195], [119, -8], [156, -196], [122, -196], [89, -161]], [[54125, 64996], [68, -895], [104, -150], [4, -183], [116, -198], [-60, -248], [-107, -1168], [-15, -749], [-354, -543], [-120, -759], [115, -213], [0, -371], [178, -13], [-28, -271]], [[53939, 59018], [-52, -12], [-188, 630], [-65, 23], [-217, -322], [-215, 168], [-150, 34], [-80, -81], [-163, 17], [-164, -245], [-141, -14], [-337, 298], [-131, -142], [-142, 10], [-104, 218], [-279, 214], [-298, -68], [-72, -124], [-39, -331], [-80, -233], [-19, -514]], [[52361, 54577], [-289, -207], [-105, 30], [-107, -129], [-222, 13], [-149, 360], [-91, 417], [-197, 379], [-209, -7], [-245, 1]], [[26191, 58215], [-96, 181], [-130, 233], [-61, 194], [-117, 181], [-140, 260], [31, 89], [46, -87], [21, 41]], [[26903, 60465], [-24, -55], [-14, -129], [29, -210], [-64, -197], [-30, -231], [-9, -254], [15, -148], [7, -260], [-43, -56], [-26, -247], [19, -152], [-56, -147], [12, -156], [43, -94]], [[50920, 81398], [143, 159], [244, 847], [380, 241], [231, -16]], [[58639, 91887], [-473, -231], [-224, -54]], [[55734, 91626], [-172, -23], [-41, -379], [-523, 92], [-74, -321], [-267, 2], [-183, -409], [-278, -639], [-431, -810], [101, -197], [-97, -228], [-275, 10], [-180, -540], [17, -765], [177, -292], [-92, -677], [-231, -395], [-122, -332]], [[53063, 85723], [-187, 354], [-548, -666], [-371, -135], [-384, 293], [-99, 619], [-88, 1329], [256, 371], [733, 483], [549, 595], [508, 802], [668, 1112], [465, 434], [763, 722], [610, 252], [457, -31], [423, 477], [506, -25], [499, 115], [869, -422], [-358, -154], [305, -361]], [[56867, 96664], [-620, -236], [-490, 134], [191, 149], [-167, 184], [575, 115], [110, -216], [401, -130]], [[55069, 97728], [915, -429], [-699, -227], [-155, -424], [-243, -108], [-132, -478], [-335, -22], [-598, 351], [252, 205], [-416, 166], [-541, 487], [-216, 451], [757, 206], [152, -202], [396, 8], [105, 197], [408, 20], [350, -201]], [[57068, 98134], [545, -202], [-412, -310], [-806, -68], [-819, 96], [-50, 159], [-398, 10], [-304, 264], [858, 161], [403, -138], [281, 172], [702, -144]], [[98060, 28265], [63, -238], [198, 233], [80, -243], [0, -242], [-103, -267], [-182, -424], [-142, -232], [103, -277], [-214, -7], [-238, -217], [-75, -377], [-157, -583], [-219, -257], [-138, -164], [-256, 12], [-180, 190], [-302, 40], [-46, 212], [149, 427], [349, 568], [179, 109], [200, 219], [238, 301], [167, 299], [123, 429], [106, 146], [41, 321], [195, 267], [61, -245]], [[98502, 31008], [202, -607], [5, 394], [126, -158], [41, -435], [224, -188], [188, -46], [158, 220], [141, -67], [-67, -511], [-85, -336], [-212, 12], [-74, -175], [26, -248], [-41, -107], [-105, -310], [-138, -395], [-214, -229], [-48, 151], [-116, 83], [160, 474], [-91, 317], [-299, 230], [8, 209], [201, 200], [47, 444], [-13, 372], [-113, 386], [8, 102], [-133, 237], [-218, 510], [-117, 408], [104, 45], [151, -320], [216, -149], [78, -513]], [[64752, 61418], [-91, 403], [-217, 950]], [[64444, 62771], [833, 576], [185, 1152], [-127, 408]], [[65665, 66183], [125, -393], [155, -209], [203, -76], [165, -105], [125, -330], [75, -191], [100, -73], [-1, -128], [-101, -344], [-44, -161], [-117, -184], [-104, -395], [-126, 30], [-58, -137], [-44, -292], [34, -385], [-26, -71], [-128, 2], [-174, -215], [-27, -281], [-63, -121], [-173, 4], [-109, -145], [1, -232], [-134, -160], [-153, 54], [-186, -194], [-128, -33]], [[65575, 66834], [80, 196], [35, -50], [-26, -238], [-37, -104]], [[68937, 65473], [-203, 146], [-83, 414], [-215, 438], [-512, -108], [-451, -11], [-391, -81]], [[28366, 55989], [-93, 166], [-59, 311], [68, 154], [-70, 40], [-52, 190], [-138, 160], [-122, -37], [-56, -200], [-112, -145], [-61, -20], [-27, -120], [132, -312], [-75, -74], [-40, -85], [-130, -29], [-48, 344], [-36, -98], [-92, 33], [-56, 232], [-114, 38], [-72, 68], [-119, -1], [-8, -125], [-32, 87]], [[27070, 57338], [100, -206], [-6, -122], [111, -26], [26, 47], [77, -142], [136, 42], [119, 145], [168, 116], [95, 172], [153, -33], [-10, -57], [155, -20], [124, -99], [90, -173], [105, -159]], [[30452, 41263], [-279, 331], [-24, 236], [-551, 578], [-498, 630], [-214, 355], [-115, 476], [46, 166], [-236, 755], [-274, 1063], [-262, 1147], [-114, 262], [-87, 424], [-216, 376], [-198, 233], [90, 257], [-134, 550], [86, 403], [221, 364]], [[85104, 56675], [28, -382], [16, -323], [-94, -527], [-102, 587], [-130, -292], [89, -425], [-79, -270], [-327, 335], [-78, 416], [84, 274], [-176, 273], [-87, -239], [-131, 22], [-205, -321], [-46, 168], [109, 486], [175, 161], [151, 217], [98, -260], [212, 157], [45, 257], [196, 16], [-16, 445], [225, -273], [23, -290], [20, -212]], [[84439, 57749], [-100, -190], [-87, -363], [-87, -171], [-171, 398], [57, 154], [70, 162], [30, 357], [153, 34], [-44, -388], [205, 556], [-26, -549]], [[82917, 57194], [-369, -546], [136, 403], [200, 355], [167, 399], [146, 572], [49, -470], [-183, -317], [-146, -396]], [[83856, 58678], [166, -179], [177, 1], [-5, -240], [-129, -245], [-176, -173], [-10, 268], [20, 293], [-43, 275]], [[84861, 58834], [78, -643], [-214, 152], [5, -193], [68, -355], [-132, -129], [-11, 405], [-84, 30], [-43, 348], [163, -46], [-4, 218], [-169, 440], [266, -13], [77, -214]], [[83757, 59356], [-74, -498], [-119, 288], [-142, 438], [238, -21], [97, -207]], [[83700, 62485], [171, -164], [85, 150], [26, -146], [-46, -239], [95, -413], [-73, -478], [-164, -191], [-43, -465], [62, -458], [147, -64], [123, 68], [347, -319], [-27, -313], [91, -139], [-29, -265], [-216, 283], [-103, 302], [-71, -211], [-177, 345], [-253, -86], [-138, 128], [14, 238], [87, 146], [-83, 133], [-36, -207], [-137, 331], [-41, 251], [-11, 551], [112, -190], [29, 901], [90, 522], [169, -1]], [[93299, 47902], [-78, -58], [-120, 221], [-122, 366], [-59, 439], [38, 55], [30, -171], [84, -130], [135, -366], [131, -195], [-39, -161]], [[92217, 48675], [-146, -48], [-44, -161], [-152, -140], [-142, -135], [-148, 1], [-228, 167], [-158, 161], [23, 178], [249, -84], [152, 45], [42, 276], [40, 14], [27, -306], [158, 44], [78, 197], [155, 206], [-30, 339], [166, 11], [56, -94], [-5, -320], [-93, -351]], [[89166, 50332], [482, -397], [513, -329], [192, -295], [154, -290], [43, -339], [462, -356], [68, -306], [-256, -62], [62, -383], [248, -378], [180, -611], [159, 19], [-11, -255], [215, -98], [-84, -108], [295, -243], [-30, -166], [-184, -40], [-69, 149], [-238, 65], [-281, 86], [-216, 368], [-158, 316], [-144, 504], [-362, 252], [-235, -164], [-170, -190], [35, -425], [-218, -198], [-155, 96], [-288, 25]], [[92538, 49238], [-87, -154], [-52, 340], [-65, 223], [-126, 189], [-158, 245], [-200, 170], [77, 139], [150, -162], [94, -126], [117, -139], [111, -241], [106, -185], [33, -299]], [[53922, 82787], [189, 169], [434, 266], [350, 195], [277, -97], [21, -140], [268, -8]], [[55461, 83172], [342, -65], [511, 9]], [[56535, 81532], [139, -502], [-29, -162], [-138, -67], [-252, -479], [71, -259], [-60, 34]], [[56266, 80097], [-264, 221], [-200, -81], [-131, 59], [-165, -123], [-140, 204], [-114, -78], [-16, 34]], [[31588, 62492], [142, -51], [50, -114], [-71, -146], [-209, 4], [-163, -21], [-16, 247], [40, 84], [227, -3]], [[86288, 76244], [39, -101]], [[86327, 76143], [-106, 35], [-120, -195], [-83, -196], [10, -414], [-143, -127], [-50, -102], [-104, -170], [-185, -95], [-121, -154], [-9, -250], [-32, -63], [111, -94], [157, -253]], [[85048, 73569], [-135, 109], [-34, -108], [-81, -48], [-10, 109], [-72, 52], [-75, 92], [76, 254], [66, 67], [-25, 105], [71, 311], [-18, 94], [-163, 63], [-131, 154]], [[47929, 73193], [-112, -149], [-146, 81], [-143, -64], [42, 451], [-26, 354], [-124, 53], [-67, 218], [22, 377], [111, 210], [20, 232], [58, 347], [-6, 244], [-56, 206], [-12, 195]], [[64113, 66085], [-18, 419], [75, 302], [76, 62], [84, -180], [5, -337], [-61, -339]], [[64274, 66012], [-77, -41], [-84, 114]], [[56308, 79404], [120, 123], [172, -64], [178, -2], [129, -141], [95, 89], [205, 55], [69, 135], [118, 0]], [[57842, 78025], [124, -106], [131, 93], [126, -99]], [[58223, 77913], [6, -149], [-135, -124], [-84, 54], [-78, -694]], [[56293, 77303], [-51, 101], [65, 97], [-69, 72], [-87, -129], [-162, 167], [-22, 237], [-169, 136], [-31, 183], [-151, 226]], [[89901, 81054], [280, -1020], [-411, 190], [-171, -832], [271, -590], [-8, -403], [-211, 347], [-182, -445], [-51, 483], [31, 561], [-32, 621], [64, 436], [13, 770], [-163, 566], [24, 787], [257, 265], [-110, 267], [123, 81], [73, -381], [96, -555], [-7, -567], [114, -581]], [[55461, 83172], [63, 254], [383, 186]], [[99999, 92620], [-305, -29], [-49, 183], [-99645, 240], [36, 24], [235, -1], [402, -165], [-24, -79], [-286, -138], [-363, -35], [99999, 0]], [[89889, 93991], [-421, -4], [-569, 64], [-49, 31], [263, 227], [348, 54], [394, -221], [34, -151]], [[91869, 95069], [-321, -228], [-444, 52], [-516, 227], [66, 187], [518, -87], [697, -151]], [[90301, 95344], [-219, -427], [-1023, 16], [-461, -136], [-550, 374], [149, 396], [366, 108], [734, -25], [1004, -306]], [[65981, 92556], [-164, -51], [-907, 75], [-74, 256], [-503, 154], [-40, 311], [284, 124], [-10, 314], [551, 491], [-255, 70], [665, 506], [-75, 261], [621, 304], [917, 370], [925, 108], [475, 214], [541, 74], [193, -227], [-187, -179], [-984, -286], [-848, -274], [-863, -548], [-414, -563], [-435, -553], [56, -479], [531, -472]], [[63639, 78550], [-127, -342], [-269, -95], [-276, -594], [252, -547], [-27, -388], [303, -678]], [[61098, 76843], [-354, 486], [-317, 218], [-240, 338], [202, 92], [231, 482], [-156, 227], [410, 236], [-8, 125], [-249, -92]], [[60617, 78955], [9, 255], [143, 161], [269, 42], [44, 192], [-62, 318], [113, 302], [-3, 169], [-410, 187], [-162, -6], [-172, 270], [-213, -92], [-352, 203], [6, 113], [-99, 250], [-222, 28], [-23, 178], [70, 117], [-178, 326], [-288, -56], [-84, 29], [-70, -131], [-104, 24]], [[57772, 86080], [316, 318], [-291, 274]], [[58639, 91887], [286, 200], [456, -348], [761, -137], [1050, -652], [213, -273], [18, -384], [-308, -302], [-454, -154], [-1240, 438], [-204, -73], [453, -422], [18, -267], [18, -589], [358, -175], [217, -150], [36, 279], [-168, 248], [177, 218], [672, -358], [233, 140], [-186, 422], [647, 564], [256, -33], [260, -202], [161, 396], [-231, 343], [136, 345], [-204, 357], [777, -185], [158, -322], [-351, -71], [1, -321], [219, -197], [429, 125], [68, 367], [580, 274], [970, 495], [209, -28], [-273, -350], [344, -60], [199, 197], [521, 16], [412, 239], [317, -347], [315, 381], [-291, 334], [145, 190], [820, -175], [385, -180], [1006, -658], [186, 302], [-282, 304], [-8, 122], [-335, 57], [92, 273], [-149, 449], [-8, 185], [512, 521], [183, 523], [206, 114], [736, -152], [57, -320], [-263, -468], [173, -183], [89, -403], [-63, -789], [307, -353], [-120, -384], [-544, -818], [318, -85], [110, 207], [306, 148], [74, 285], [240, 274], [-162, 328], [130, 380], [-304, 47], [-67, 321], [222, 578], [-361, 469], [497, 389], [-64, 409], [139, 13], [145, -319], [-109, -556], [297, -105], [-127, 415], [465, 227], [577, 30], [513, -328], [-247, 479], [-28, 614], [483, 116], [669, -25], [602, 75], [-226, 301], [321, 378], [319, 16], [540, 286], [734, 77], [93, 157], [729, 54], [227, -129], [624, 306], [510, -10], [77, 249], [265, 245], [656, 236], [476, -186], [-378, -142], [629, -89], [75, -284], [254, 140], [812, -8], [626, -281], [223, -215], [-69, -300], [-307, -170], [-730, -320], [-209, -171], [345, -80], [410, -146], [251, 109], [141, -369], [122, 149], [444, 91], [892, -95], [67, -269], [1162, -86], [15, 440], [590, -101], [443, 3], [449, -303], [128, -369], [-165, -241], [349, -453], [437, -234], [268, 605], [446, -260], [473, 155], [538, -177], [204, 162], [455, -81], [-201, 534], [367, 250], [2509, -374], [236, -342], [727, -440], [1122, 109], [553, -95], [231, -238], [-33, -421], [342, -164], [372, 118], [492, 15], [525, -113], [526, 64], [484, -512], [344, 184], [-224, 368], [123, 256], [886, -161], [578, 34], [799, -275], [-99610, -251], [681, -440], [728, -572], [-24, -358], [187, -143], [-64, 418], [754, -86], [544, -539], [-276, -251], [-455, -59], [-7, -563], [-111, -120], [-260, 17], [-212, 201], [-369, 168], [-62, 250], [-283, 94], [-315, -74], [-151, 201], [60, 214], [-333, -137], [126, -271], [-158, -244], [0, -3], [99640, -253], [-360, 42], [250, -307], [166, -474], [128, -155], [32, -238], [-71, -153], [-518, 126], [-777, -434], [-247, -67], [-425, -405], [-403, -353], [-102, -262], [-397, 399], [-724, -453], [-126, 214], [-268, -246], [-371, 79], [-90, -379], [-333, -557], [10, -233], [316, -129], [-37, -839], [-258, -21], [-119, -482], [116, -248], [-486, -294], [-96, -657], [-415, -141], [-83, -585], [-400, -536], [-103, 396], [-119, 841], [-155, 1279], [134, 799], [234, 344], [14, 269], [432, 129], [496, 725], [479, 592], [499, 459], [223, 812], [-337, -49], [-167, -474], [-705, -632], [-227, 708], [-717, -196], [-696, -965], [230, -353], [-620, -151], [-430, -59], [20, 417], [-431, 87], [-344, -283], [-850, 99], [-914, -171], [-899, -1124], [-1065, -1358], [438, -73], [136, -360], [270, -128], [178, 288], [305, -38], [401, -633], [9, -490], [-217, -576], [-23, -687], [-126, -921], [-418, -833], [-94, -399], [-377, -670], [-374, -665], [-179, -340], [-370, -338], [-175, -8], [-175, 280], [-373, -421], [-43, -192]], [[79187, 96925], [-1566, -222], [507, 756], [229, 64], [208, -37], [704, -327], [-82, -234]], [[64204, 98215], [-373, -76], [-250, -44], [-39, -94], [-324, -95], [-301, 136], [158, 180], [-618, 17], [542, 105], [422, 7], [57, -155], [159, 138], [262, 95], [412, -126], [-107, -88]], [[77760, 97255], [-606, -71], [-773, 166], [-462, 220], [-213, 413], [-379, 113], [722, 394], [600, 130], [540, -290], [640, -557], [-69, -518]], [[58449, 51176], [110, -325], [-16, -339], [-80, -73]], [[58216, 51057], [67, -59], [166, 178]], [[45260, 63923], [12, 243]], [[61883, 61244], [-37, 246], [-83, 173], [-22, 230], [-143, 206], [-148, 483], [-79, 469], [-192, 397], [-124, 94], [-184, 549], [-32, 400], [12, 342], [-159, 638], [-130, 225], [-150, 119], [-92, 330], [15, 130], [-77, 299], [-81, 128], [-108, 429], [-170, 464], [-141, 395], [-139, -2], [44, 316], [12, 201], [34, 230]], [[63448, 68272], [109, -497], [137, -131], [47, -203], [190, -242], [16, -237], [-27, -192], [35, -193], [80, -162], [37, -189], [41, -141]], [[64274, 66012], [53, -220]], [[64444, 62771], [-801, -221], [-259, -259], [-199, -604], [-130, -96], [-70, 191], [-106, -28], [-269, 57], [-50, 58], [-321, -13], [-75, -52], [-114, 149], [-74, -283], [28, -243], [-121, -183]], [[59434, 57280], [-39, 11], [5, 287], [-33, 197], [-143, 228], [-34, 415], [34, 425], [-129, 40], [-19, -129], [-167, -29], [67, -169], [23, -346], [-152, -316], [-138, -415], [-144, -59], [-233, 336], [-105, -119], [-29, -168], [-143, -109], [-9, -118], [-277, 0], [-38, 118], [-200, 20], [-100, -99], [-77, 50], [-143, 336], [-48, 158], [-200, -79], [-76, -267], [-72, -514], [-95, -109], [-85, -63]], [[56635, 56793], [-23, 27]], [[56351, 58246], [3, 140], [-102, 169], [-3, 335], [-58, 222], [-98, -33], [28, 211], [72, 240], [-32, 239], [92, 176], [-58, 135], [73, 355], [127, 425], [240, -41], [-14, 2286]], [[60240, 64499], [90, -565], [-61, -105], [40, -593], [102, -687], [106, -142], [152, -213]], [[59433, 57348], [1, -68]], [[59434, 57280], [3, -449]], [[59445, 54277], [-171, -265], [-195, 1], [-224, -135], [-176, 129], [-115, -157]], [[56824, 56568], [-189, 225]], [[45357, 59658], [-115, 449], [-138, 205], [122, 109], [134, 404], [66, 296]], [[45367, 58962], [-46, 441]], [[95032, 45793], [78, -198], [-194, 3], [-106, 355], [166, -140], [56, -20]], [[94680, 46144], [-108, -13], [-170, 58], [-58, 89], [17, 228], [183, -90], [91, -121], [45, -151]], [[94910, 46301], [-42, -106], [-206, 499], [-57, 344], [94, 0], [100, -461], [111, -276]], [[94409, 47028], [12, -116], [-218, 245], [-152, 206], [-104, 192], [41, 59], [128, -138], [228, -265], [65, -183]], [[93760, 47598], [-56, -33], [-121, 131], [-114, 237], [14, 96], [166, -243], [111, -188]], [[46822, 55737], [-75, 43], [-200, 232], [-144, 308], [-49, 211], [-34, 425]], [[25613, 59537], [-31, -135], [-161, 8], [-100, 55], [-115, 115], [-154, 36], [-79, 123]], [[61984, 58430], [91, -106], [54, -238], [125, -241], [138, -2], [262, 147], [302, 68], [245, 179], [138, 38], [99, 105], [158, 20]], [[63596, 58400], [-2, -9], [-1, -237], [0, -581], [0, -301], [-125, -353], [-194, -481]], [[63596, 58400], [89, 12], [128, 85], [147, 58], [132, 198], [105, 1], [6, -159], [-25, -335], [1, -303], [-59, -208], [-78, -622], [-134, -644], [-172, -735], [-238, -844], [-237, -645], [-327, -785], [-278, -467], [-415, -571], [-259, -438], [-304, -698], [-64, -304], [-63, -136]], [[34125, 55269], [333, -115], [30, 104], [225, 41], [298, -155]], [[34889, 54255], [109, -341], [-49, -248], [-24, -263], [-71, -242]], [[56266, 80097], [-77, -150], [-55, -232]], [[53809, 78032], [62, 52]], [[56639, 89841], [-478, -163], [-269, -401], [43, -353], [-441, -463], [-537, -495], [-202, -811], [198, -406], [265, -320], [-255, -649], [-289, -135], [-106, -967], [-157, -539], [-337, 55], [-158, -456], [-321, -27], [-89, 545], [-232, 653], [-211, 814]], [[58908, 36434], [-56, -256], [-163, -62], [-166, 312], [-2, 199], [76, 216], [26, 168], [80, 41], [140, -105]], [[59999, 71781], [-26, 440], [68, 237]], [[60041, 72458], [74, 126], [75, 127], [15, 321], [91, -112], [306, 160], [147, -108], [229, 1], [320, 217], [149, -10], [316, 89]], [[50518, 55366], [-224, -122]], [[78495, 58847], [-249, 265], [-238, -11], [41, 452], [-245, -3], [-22, -633], [-150, -841], [-90, -509], [19, -417], [181, -18], [113, -526], [50, -498], [155, -330], [168, -67], [144, -299]], [[77801, 55552], [-110, 221], [-47, 285], [-148, 325], [-135, 274], [-45, -339], [-53, 320], [30, 359], [82, 553]], [[68841, 73220], [156, 583], [-60, 429], [-204, 137], [72, 254], [232, -27], [132, 318], [89, 370], [371, 134], [-58, -267], [40, -161], [114, 15]], [[64978, 73251], [-52, 408], [40, 602], [-216, 195], [71, 394], [-184, 34], [61, 485], [262, -141], [244, 184], [-202, 346], [-80, 329], [-224, -147], [-28, -422], [-87, 374]], [[65546, 75618], [313, 8], [-45, 290], [237, 199], [234, 334], [374, -304], [30, -460], [106, -118], [301, 27], [93, -105], [137, -593], [317, -398], [181, -271], [291, -282], [369, -247], [-7, -352]], [[84713, 46708], [32, 136], [239, 129], [194, 20], [87, 72], [105, -72], [-102, -156], [-289, -252], [-233, -165]], [[32866, 58026], [160, 75], [58, -20], [-11, -430], [-232, -63], [-50, 52], [81, 158], [-6, 228]], [[52339, 73106], [302, 232], [195, -69], [-9, -291], [236, 212], [20, -111], [-139, -282], [-2, -266], [96, -143], [-36, -499], [-183, -289], [53, -314], [143, -10], [70, -274], [106, -90]], [[60041, 72458], [-102, 261], [105, 217], [-169, -49], [-233, 132], [-191, -331], [-421, -65], [-225, 309], [-300, 19], [-64, -238], [-192, -69], [-268, 307], [-303, -11], [-165, 573], [-203, 320], [135, 447], [-176, 276], [308, 550], [428, 23], [117, 438], [529, -76], [334, 373], [324, 163], [459, 13], [485, -406], [399, -223], [323, 89], [239, -52], [328, 301]], [[57776, 76021], [33, -222], [243, -186], [-51, -141], [-330, -32], [-118, -178], [-232, -310], [-87, 268], [3, 119]], [[83826, 65878], [-167, -924], [-119, -472], [-146, 486], [-32, 427], [163, 566], [223, 436], [127, -172], [-49, -347]], [[60889, 49136], [-128, -710], [16, -326], [178, -210], [8, -149], [-76, -348], [16, -175], [-18, -275], [97, -361], [115, -568], [101, -126]], [[59099, 46514], [-157, 172], [-177, 97], [-111, 97], [-116, 146]], [[58449, 51176], [98, 69], [304, -7], [566, 44]], [[60617, 78955], [-222, -46], [-185, -187], [-260, -30], [-239, -215], [16, -358], [136, -139], [284, 35], [-55, -206], [-304, -100], [-377, -333], [-154, 117], [61, 271], [-304, 169], [50, 110], [265, 191], [-80, 132], [-432, 146], [-19, 215], [-257, -71], [-103, -317], [-215, -426]], [[35174, 32383], [-121, -362], [-313, -320], [-205, 115], [-151, -62], [-256, 247], [-189, -18], [-169, 319]], [[6794, 62819], [-41, -96], [-69, 82], [8, 161], [-46, 210], [14, 64], [48, 94], [-19, 113], [16, 54], [21, -11], [107, -97], [49, -50], [45, -77], [71, -202], [-7, -32], [-108, -123], [-89, -90]], [[6645, 63718], [-94, -41], [-47, 121], [-32, 47], [-3, 36], [27, 49], [99, -55], [73, -88], [-23, -69]], [[6456, 64025], [-9, -63], [-149, 17], [21, 70], [137, -24]], [[6207, 64108], [-15, -33], [-19, 8], [-97, 20], [-35, 130], [-11, 23], [74, 80], [23, -37], [80, -191]], [[5737, 64488], [-33, -57], [-93, 105], [14, 42], [43, 57], [64, -13], [5, -134]], [[31350, 77823], [48, -189], [-296, -279], [-286, -198], [-293, -171], [-147, -342], [-47, -129], [-3, -306], [92, -305], [115, -14], [-29, 210], [83, -128], [-22, -165], [-188, -93], [-133, 11], [-205, -100], [-121, -29], [-162, -28], [-231, -167], [408, 108], [82, -109], [-389, -173], [-177, -1], [8, 71], [-84, -160], [82, -26], [-60, -414], [-203, -443], [-20, 148], [-61, 30], [-91, 144], [57, -310], [69, -103], [5, -217], [-89, -224], [-157, -460], [-25, 23], [86, 392], [-142, 220], [-33, 478], [-53, -249], [59, -365], [-183, 90], [191, -185], [12, -548], [79, -40], [29, -199], [39, -577], [-176, -427], [-288, -171], [-182, -338], [-139, -37], [-141, -211], [-39, -193], [-305, -374], [-157, -274], [-131, -342], [-43, -409], [50, -400], [92, -492], [124, -408], [1, -249], [132, -668], [-9, -388], [-12, -224], [-69, -352], [-83, -73], [-137, 70], [-44, 253], [-105, 132], [-148, 496], [-129, 440], [-42, 225], [57, 383], [-77, 316], [-217, 482], [-108, 89], [-281, -262], [-49, 29], [-135, 269], [-174, 142], [-314, -72], [-247, 63], [-212, -39], [-114, -90], [50, -153], [-5, -234], [59, -113], [-53, -76], [-103, 85], [-104, -109], [-202, 17], [-207, 305], [-242, -72], [-202, 133], [-173, -40], [-234, -135], [-253, -427], [-276, -248], [-152, -275], [-63, -259], [-3, -397], [14, -277], [52, -196]], [[17464, 70566], [-46, 294], [-180, 331], [-130, 69], [-30, 165], [-156, 29], [-100, 156], [-258, 57], [-71, 93], [-33, 316], [-270, 578], [-231, 801], [10, 133], [-123, 190], [-215, 483], [-38, 469], [-148, 315], [61, 477], [-10, 494], [-89, 441], [109, 543], [34, 523], [33, 522], [-50, 773], [-88, 492], [-80, 268], [33, 112], [402, -195], [148, -544], [69, 152], [-45, 472], [-94, 473]], [[7498, 84721], [-277, -219], [-142, 148], [-43, 270], [252, 205], [148, 88], [185, -39], [117, -179], [-240, -274]], [[4006, 86330], [-171, -89], [-182, 107], [-168, 157], [274, 98], [220, -52], [27, -221]], [[2297, 88560], [171, -109], [173, 59], [225, -152], [276, -77], [-23, -63], [-211, -121], [-211, 125], [-106, 104], [-245, -33], [-66, 51], [17, 216]], [[13740, 83389], [-153, 217], [-245, 183], [-78, 503], [-358, 466], [-150, 543], [-267, 38], [-441, 14], [-326, 165], [-574, 598], [-266, 109], [-486, 206], [-385, -49], [-546, 264], [-330, 246], [-309, -122], [58, -400], [-154, -37], [-321, -120], [-245, -195], [-308, -122], [-39, 339], [125, 565], [295, 177], [-76, 145], [-354, -321], [-190, -383], [-400, -410], [203, -280], [-262, -413], [-299, -241], [-278, -176], [-69, -255], [-434, -297], [-87, -271], [-325, -246], [-191, 44], [-259, -160], [-282, -196], [-231, -193], [-477, -164], [-43, 96], [304, 270], [271, 177], [296, 315], [345, 65], [137, 236], [385, 345], [62, 115], [205, 204], [48, 437], [141, 340], [-320, -175], [-90, 99], [-150, -209], [-181, 292], [-75, -207], [-104, 287], [-278, -230], [-170, 0], [-24, 343], [50, 211], [-179, 205], [-361, -110], [-235, 270], [-190, 138], [-1, 327], [-214, 245], [108, 331], [226, 322], [99, 295], [225, 42], [191, -92], [224, 278], [201, -50], [212, 179], [-52, 263], [-155, 104], [205, 222], [-170, -7], [-295, -125], [-85, -127], [-219, 127], [-392, -65], [-407, 138], [-117, 232], [-351, 334], [390, 241], [620, 282], [228, 0], [-38, -288], [586, 22], [-225, 357], [-342, 219], [-197, 288], [-267, 246], [-381, 182], [155, 302], [493, 19], [350, 262], [66, 280], [284, 274], [271, 66], [526, 256], [256, -39], [427, 307], [421, -121], [201, -260], [123, 112], [469, -35], [-16, -132], [425, -98], [283, 57], [585, -182], [534, -54], [214, -75], [370, 94], [421, -173], [302, -81]], [[30185, 58611], [-8, -136], [-163, -67], [91, -262], [-3, -301], [-123, -334], [105, -457], [120, 37], [62, 417], [-86, 202], [-14, 436], [346, 234], [-38, 272], [97, 181], [100, -404], [195, -10], [180, -321], [11, -190], [249, -6], [297, 60], [159, -258], [213, -71], [155, 180], [4, 145], [344, 34], [333, 8], [-236, -170], [95, -272], [222, -43], [210, -283], [45, -462], [144, 13], [109, -135]], [[80013, 64241], [-371, -493], [-231, -544], [-61, -399], [212, -607], [260, -753], [252, -356], [169, -462], [127, -1066], [-37, -1013], [-232, -379], [-318, -371], [-227, -480], [-346, -536], [-101, 369], [78, 390], [-206, 327]], [[96623, 42347], [-92, -76], [-93, 252], [10, 155], [175, -331]], [[96418, 43229], [45, -464], [-75, 72], [-58, -31], [-39, 159], [-6, 441], [133, -177]], [[64752, 61418], [-201, -154], [-54, -256], [-6, -196], [-277, -244], [-444, -268], [-249, -406], [-122, -32], [-83, 34], [-163, -239], [-177, -111], [-233, -30], [-70, -33], [-61, -152], [-73, -42], [-43, -146], [-137, 12], [-89, -78], [-192, 30], [-72, 336], [8, 315], [-46, 170], [-54, 426], [-80, 236], [56, 28], [-29, 264], [34, 111], [-12, 251]], [[58175, 39107], [113, -6], [134, -97], [94, 69], [148, -58]], [[59119, 36429], [-70, -419], [-32, -479], [-72, -260], [-190, -290], [-54, -84], [-118, -292], [-77, -296], [-158, -413], [-314, -594], [-196, -345], [-210, -262], [-290, -224], [-141, -30], [-36, -160], [-169, 85], [-138, -109], [-301, 111], [-168, -71], [-115, 31], [-286, -228], [-238, -91], [-171, -218], [-127, -13], [-117, 205], [-94, 10], [-120, 258], [-13, -80], [-37, 155], [2, 337], [-90, 386], [89, 105], [-7, 442], [-182, 539], [-139, 488], [-1, 1], [-199, 749]], [[58409, 42899], [-210, -79], [-159, -230], [-33, -199], [-100, -46], [-241, -473], [-154, -373], [-94, -13], [-90, 66], [-311, 63]]],</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&quot;</span>transform<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> {<span class="pl-s"><span class="pl-pds">&quot;</span>scale<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> [<span class="pl-c1">0.0036000360003600037</span>, <span class="pl-c1">0.0017364686646866468</span>], <span class="pl-s"><span class="pl-pds">&quot;</span>translate<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> [<span class="pl-k">-</span><span class="pl-c1">180</span>, <span class="pl-k">-</span><span class="pl-c1">90</span>]}</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span> (<span class="pl-smi">factory</span>, <span class="pl-smi">root</span>) {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> define an AMD module that relies on &#39;leaflet&#39;</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">define</span>.<span class="pl-smi">amd</span>) {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">define</span>([<span class="pl-s"><span class="pl-pds">&#39;</span>leaflet<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>d3<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>topojson<span class="pl-pds">&#39;</span></span>], factory);</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> define a Common JS module that relies on &#39;leaflet&#39;</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">module</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span>) {</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-en">factory</span>(<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>leaflet<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>d3<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>topojson<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">factory</span>(<span class="pl-smi">root</span>.<span class="pl-c1">L</span>, <span class="pl-smi">root</span>.<span class="pl-smi">d3</span>, <span class="pl-smi">root</span>.<span class="pl-smi">topojson</span>);</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">}(<span class="pl-k">function</span> (<span class="pl-c1">L</span>, <span class="pl-smi">d3</span>, <span class="pl-smi">topojson</span>) {</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">L</span>.<span class="pl-smi">Control</span>.<span class="pl-smi">GlobeMiniMap</span> <span class="pl-k">=</span> <span class="pl-c1">L</span>.<span class="pl-smi">Control</span>.<span class="pl-en">extend</span>({</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">        options<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">            position<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bottomright<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">            width<span class="pl-k">:</span> <span class="pl-c1">84</span>,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">            height<span class="pl-k">:</span> <span class="pl-c1">84</span>,</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">            land<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>#ffffff<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">            water<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>rgba(0, 0, 0, 0.7)<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">            marker<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>#fd2635<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>layer is the map layer to be shown in the minimap</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">initialize</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">L</span>.<span class="pl-smi">Util</span>.<span class="pl-en">setOptions</span>(<span class="pl-c1">this</span>, options);</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> console(this.options);</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">onAdd</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">map</span>) {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> console(&#39;onAdd()&#39;);</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">_mainMap</span> <span class="pl-k">=</span> map;</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>Creating the container and stopping events from spilling through to the main map.</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">_container</span> <span class="pl-k">=</span> <span class="pl-c1">L</span>.<span class="pl-smi">DomUtil</span>.<span class="pl-en">create</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>leaflet-control-minimap<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">_container</span>.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">width</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">_container</span>.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">height</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">L</span>.<span class="pl-smi">DomEvent</span>.<span class="pl-en">disableClickPropagation</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_container</span>);</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">L</span>.<span class="pl-smi">DomEvent</span>.<span class="pl-en">on</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_container</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>mousewheel<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">L</span>.<span class="pl-smi">DomEvent</span>.<span class="pl-smi">stopPropagation</span>);</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>Keep a record of this to prevent auto toggling when the user explicitly doesn&#39;t want it.</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">_userToggledDisplay</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">_minimized</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">_mainMap</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>moveend<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">_onMainMapMoved</span>, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">_container</span>;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">addTo</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">map</span>) {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> console(&#39;addTo()&#39;);</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">L</span>.<span class="pl-smi">Control</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">addTo</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, map);</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">initCanvas</span>();</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">initCanvas</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>marker icon</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>https://upload.wikimedia.org/wikipedia/commons/9/93/Map_marker_font_awesome.svg</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.leaflet-control-minimap<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>svg<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">width</span>)</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">height</span>)</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>style<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>position: absolute; left: 0; top: 0;<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>path<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>m 768,896 q 0,106 -75,181 -75,75 -181,75 -106,0 -181,-75 -75,-75 -75,-181 0,-106 75,-181 75,-75 181,-75 106,0 181,75 75,75 75,181 z m 256,0 q 0,-109 -33,-179 L 627,-57 q -16,-33 -47.5,-52 -31.5,-19 -67.5,-19 -36,0 -67.5,19 Q 413,-90 398,-57 L 33,717 Q 0,787 0,896 q 0,212 150,362 150,150 362,150 212,0 362,-150 150,-150 150,-362 z<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>transform<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>scale(.01,-.01),translate(3600,-3900)<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>fill:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">marker</span>);</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">projection</span> <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">geo</span>.<span class="pl-en">orthographic</span>()</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">scale</span>(<span class="pl-c1">40</span>)</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">translate</span>([<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">width</span><span class="pl-k">/</span><span class="pl-c1">2</span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">height</span><span class="pl-k">/</span><span class="pl-c1">2</span>])</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">rotate</span>([<span class="pl-c1">0</span>, <span class="pl-c1">0</span>])</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">clipAngle</span>(<span class="pl-c1">90</span>);</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> canvas <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.leaflet-control-minimap<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>canvas<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">width</span> )</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">height</span>);</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">           <span class="pl-c"><span class="pl-c">//</span> canvas.getContext().scale(this.pixel_ratio(), this.pixel_ratio());</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">c</span> <span class="pl-k">=</span> <span class="pl-smi">canvas</span>.<span class="pl-en">node</span>().<span class="pl-c1">getContext</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>2d<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">path</span> <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">geo</span>.<span class="pl-en">path</span>()</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">projection</span>(<span class="pl-c1">this</span>.<span class="pl-smi">projection</span>)</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">context</span>(<span class="pl-c1">this</span>.<span class="pl-smi">c</span>);</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span> this.c.scale(this.pixel_ratio(), this.pixel_ratio());</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> that <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">d3</span>.<span class="pl-en">json</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">world</span>) {</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">that</span>.<span class="pl-smi">globe</span> <span class="pl-k">=</span> {type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Sphere<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">that</span>.<span class="pl-smi">land</span> <span class="pl-k">=</span> <span class="pl-smi">topojson</span>.<span class="pl-en">feature</span>(worlddata, <span class="pl-smi">worlddata</span>.<span class="pl-smi">objects</span>.<span class="pl-smi">land</span>);</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>set to current view</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> this.transitionMap(this._mainMap.getCenter());</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Returns: 1 on &#39;normal&#39; screens, 2 on retina displays</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">pixel_ratio</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> ctx <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>canvas<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">getContext</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>2d<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">                dpr <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">devicePixelRatio</span> <span class="pl-k">||</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">                bsr <span class="pl-k">=</span> <span class="pl-smi">ctx</span>.<span class="pl-smi">webkitBackingStorePixelRatio</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">ctx</span>.<span class="pl-smi">mozBackingStorePixelRatio</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">ctx</span>.<span class="pl-smi">msBackingStorePixelRatio</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">ctx</span>.<span class="pl-smi">oBackingStorePixelRatio</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">ctx</span>.<span class="pl-smi">backingStorePixelRatio</span> <span class="pl-k">||</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> dpr <span class="pl-k">/</span> bsr;</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">transitionMap</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">p</span>) {</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> console(&#39;transtionMap&#39;);</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> that <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-smi">that</span>.<span class="pl-smi">c</span>;</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>c.scale(this.pixel_ratio(), this.pixel_ratio());</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> path <span class="pl-k">=</span> <span class="pl-smi">that</span>.<span class="pl-smi">path</span>;</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">d3</span>.<span class="pl-en">transition</span>()</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">duration</span>(<span class="pl-c1">1250</span>)</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">each</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>start<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">                })</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">                .<span class="pl-en">tween</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>rotate<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> r <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">interpolate</span>(<span class="pl-smi">that</span>.<span class="pl-smi">projection</span>.<span class="pl-en">rotate</span>(), [<span class="pl-k">-</span><span class="pl-smi">p</span>.<span class="pl-smi">lng</span>, <span class="pl-k">-</span><span class="pl-smi">p</span>.<span class="pl-smi">lat</span>]);</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-k">function</span> (<span class="pl-smi">t</span>) {</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">that</span>.<span class="pl-smi">projection</span>.<span class="pl-en">rotate</span>(<span class="pl-en">r</span>(t));</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">c</span>.<span class="pl-en">clearRect</span>(<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-c1">width</span> , <span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-c1">height</span>);</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">c</span>.<span class="pl-smi">fillStyle</span> <span class="pl-k">=</span> <span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-smi">water</span>, <span class="pl-smi">c</span>.<span class="pl-en">beginPath</span>(), <span class="pl-en">path</span>(<span class="pl-smi">that</span>.<span class="pl-smi">globe</span>), <span class="pl-smi">c</span>.<span class="pl-en">fill</span>();</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">c</span>.<span class="pl-smi">fillStyle</span> <span class="pl-k">=</span> <span class="pl-smi">that</span>.<span class="pl-c1">options</span>.<span class="pl-smi">land</span>, <span class="pl-smi">c</span>.<span class="pl-en">beginPath</span>(), <span class="pl-en">path</span>(<span class="pl-smi">that</span>.<span class="pl-smi">land</span>), <span class="pl-smi">c</span>.<span class="pl-en">fill</span>();</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">                    };</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">                })</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">onRemove</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">map</span>) {</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">_mainMap</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>moveend<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">_onMainMapMoved</span>, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">_mainMap</span>.<span class="pl-en">off</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>move<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">this</span>.<span class="pl-smi">_onMainMapMoving</span>, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">_onMainMapMoved</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> console(&#39;mainmapmoved&#39;);</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">_miniMapMoving</span>) {</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">_mainMapMoving</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-en">transitionMap</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_mainMap</span>.<span class="pl-en">getCenter</span>());</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">_miniMapMoving</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">L</span>.<span class="pl-smi">control</span>.<span class="pl-en">globeminimap</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">layer</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">L.Control.GlobeMiniMap</span>(layer, options);</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">L</span>.<span class="pl-smi">Map</span>.<span class="pl-en">mergeOptions</span>({</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">        miniMapControl<span class="pl-k">:</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">L</span>.<span class="pl-smi">Map</span>.<span class="pl-en">addInitHook</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">miniMapControl</span>) {</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">miniMapControl</span> <span class="pl-k">=</span> (<span class="pl-k">new</span> <span class="pl-en">GlobeMiniMap</span>()).<span class="pl-en">addTo</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">}, <span class="pl-c1">window</span>)); </td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/jakobzhao/storymap/blame/bfad6189e1d9056e7cbbe964d136413f846aa6ef/js/globeminimap.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/jakobzhao/storymap/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>
  

  </div>

        
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2019 <span title="0.42046s from unicorn-864d7b47bd-rq6tm">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-63CXqJva6bRTkcNJy7F0Wr/5PI/p4zvQKSjXhsY9PVeNlxRFJrypW7DNOZTT/oCBl91I8SZfOJ8O5SF4Nb307w==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-d1220e0f.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-fyZ07O6R6MCm+79juw8BzvCGgfZfKMgOEFP5GFPc1CNBsLonnwO1M3Ts5FgohdBbT3JFZUztQ2lJiSDfUZoxYQ==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-81923db4.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark" open>
    <summary aria-haspopup="dialog" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

