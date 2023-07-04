<div align="center">
  
# 🧭 hits
🍁The most customizable hits counter based on shields.io

</div>


### ❓ How to use
To use the counter just add `https://hits.up.railway.app` as an image and add the required queries.  
To add the number of hits add `{{hits}}` to the `label` or the `message`. 

📃 **Required Queries**
1. `label`
2. `color`

📄 **Optional Queries**
1. `message`
2. `labelColor`
3. `logoColor`
4. `logo`
5. `style`

If you want more informations about the badge's customization here it is the shields.io [docs](https://shields.io/badges/static-badge)

### 🎩 GitHub Badge
The counter automatically gets the `origin` header but github doesn't send it when requesting an image so you must add 2 more required queries: `user`, `repository`.  

### 🎯 Examples
<img src="https://hits.up.railway.app/github?label={{hits}}_Github_Badge_Views&color=191724&logo=github&style=for-the-badge&user=NotGabry&repository=hits&labelColor=c4a7e7&logoColor=191724">

```html
<img src="https://hits.up.railway.app/github?label={{hits}}_Github_Badge_Views&color=191724&logo=github&style=for-the-badge&user=NotGabry&repository=hits&labelColor=c4a7e7&logoColor=191724">
```

<img src="https://hits.up.railway.app/badge?label={{hits}}_Classic_Badge_Views&color=191724&logo=github&style=for-the-badge&labelColor=c4a7e7&logoColor=191724">

```html
<img src="https://hits.up.railway.app/badge?label={{hits}}_Classic_Badge_Views&color=191724&logo=github&style=for-the-badge&labelColor=c4a7e7&logoColor=191724">
```
> **Warning**
> *The classic badge does not work here because we are in a github readme*
