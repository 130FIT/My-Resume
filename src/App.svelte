<script>
  import { Router, Route, navigate } from "svelte-routing";
  import Home from "./Home.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Home lang={"en"} /></Route>
    <Route path="/th"><Home lang={"th"} /></Route>
    <Route path="/en"><Home lang={"en"} /></Route>
  </div>
</Router>
