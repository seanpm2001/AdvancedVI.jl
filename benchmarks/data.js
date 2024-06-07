window.BENCHMARK_DATA = {
  "lastUpdate": 1717719819682,
  "repoUrl": "https://github.com/TuringLang/AdvancedVI.jl",
  "entries": {
    "Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "msca8h@naver.com",
            "name": "Kyurae Kim",
            "username": "Red-Portal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "314eacf763af1c52153759268e30e87fbf17c5e7",
          "message": "add continuous benchmarking (#61)",
          "timestamp": "2024-06-06T00:34:12+01:00",
          "tree_id": "aaa9dc2e141f5d5744018e31585322976599e747",
          "url": "https://github.com/TuringLang/AdvancedVI.jl/commit/314eacf763af1c52153759268e30e87fbf17c5e7"
        },
        "date": 1717630605270,
        "tool": "julia",
        "benches": [
          {
            "name": "normal + bijector/meanfield/ForwardDiff",
            "value": 500583347,
            "unit": "ns",
            "extra": "gctime=31453527\nmemory=851662624\nallocs=3222678\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "normal + bijector/meanfield/ReverseDiff",
            "value": 136374500,
            "unit": "ns",
            "extra": "gctime=7583095\nmemory=89006704\nallocs=1881679\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "msca8h@naver.com",
            "name": "Kyurae Kim",
            "username": "Red-Portal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75eb334a31a4ff1036501d1f9d8d8ed4b327fde6",
          "message": "remove signature with user-defined restructure (#64)",
          "timestamp": "2024-06-07T01:21:07+01:00",
          "tree_id": "c6b799c4dff0b474b04759534fce8930d5bad550",
          "url": "https://github.com/TuringLang/AdvancedVI.jl/commit/75eb334a31a4ff1036501d1f9d8d8ed4b327fde6"
        },
        "date": 1717719818784,
        "tool": "julia",
        "benches": [
          {
            "name": "normal + bijector/meanfield/ForwardDiff",
            "value": 498137471,
            "unit": "ns",
            "extra": "gctime=31567906\nmemory=851982592\nallocs=3233671\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "normal + bijector/meanfield/ReverseDiff",
            "value": 141700614.5,
            "unit": "ns",
            "extra": "gctime=8378886.5\nmemory=89566656\nallocs=1899672\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}