# 1. Notes


# 2. Mistakes
1. I use user = data.map(user =>, it should be users = data.map(user =>
2. I should user defer to load the script after the page is loaded
<script src="script.js" defer></script>
3. I should use the function toLowerCase() to make the search case insensitive

4. Syntax Error in forEach:
In script, there is a space between users. and forEach. This syntax is incorrect.

Fix:
Change users. forEach to users.forEach.

5. Missing CSS:
use wrong css class name in the script.js file.
I should use .hidden instead of .hide

Fix:
Add the following CSS if not present:

css
Copy code
.hidden {
    display: none;
}