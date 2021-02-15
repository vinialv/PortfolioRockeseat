const express = require('express')
const nunjucks = require('nunjucks')
const videos = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    const about = {
        avatar_url: "https://avatars1.githubusercontent.com/u/25538092?s=460&u=69499e075036c9da62536b783cef69e7cba60288&v=4",
        name: "Vinicius Alves",
        role: "Student at Rocketseat",
        description: "Front-end developer",
        links: [
            { name: "Github", url: "https://github.com/vinialv", },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/viniciusoalves/" }
        ]
    }
    return res.render("about", { about })
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos })
})

server.get("/video", function (req, res) {
    const id = req.query.id
    const video = videos.find(function (video) {
        return video.id == id
    })
    if (!video) {
        return res.send("Video not found!")
    }
    return res.render("video", { item: video })
})

server.listen(5000, function () {
    console.log("Server is running!")
})

