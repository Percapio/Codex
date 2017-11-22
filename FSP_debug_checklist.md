# FSP Debugging Checklist

This is by no means an exhaustive list. If you feel like you hit the same error multiple times, chances are your peers may have already or will in the future hit that same bug. They are your best resource moving forward.

### FSP debugging checklist:
  + is your webpack/server running/happy? (had time to catch up?)
  + if you added any new gems bundle, did you restart your rails server?
  + correct spelling of relevant functions/variables?
  + appropriate import/export statements?
    + is the path correctly finding your file?("can't resolve...")
    + are you destructuring in your import statement appropriately? (export vs export default)
  + do you have a default state in reducer?
  + what are the redux-react cycle steps that happen immediately before and after what you're trying to do?
    + drop a debugger in both spots, are all the variable and state what you expect?
    + don't forget to pass parameters into your container functions (mapDispatchToProps)
  + stack overflow? google?
  + did you ask your neighbor?
  + but did you turn it off and turn it on again?


### Errors and tips on where to look:
  + 400 level error: routing problem - likely in the AJAX requests/missing routes or some combo of these and the above
  + 500 level error: rails backend error -often with a controller or a view, can also be db validation related(check params)
