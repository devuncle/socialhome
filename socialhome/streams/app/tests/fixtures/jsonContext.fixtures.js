import _ from "lodash"
import faker from "faker"


const getFakeAuthor = function (args = {}) {
    return _.defaults({}, args, {
        guid: faker.random.uuid(),
        handle: faker.internet.exampleEmail(),
        home_url: "https://127.0.0.1",
        id: faker.random.number(),
        image_url_small: "https://127.0.0.1/image.png",
        is_local: faker.random.boolean(),
        name: faker.name.findName(),
        url: "https://127.0.0.1",
    })
}

const getFakePost = function (args = {}) {
    return _.defaults({}, args, {
        author: getFakeAuthor(),
        edited: faker.random.boolean(),
        humanized_timestamp: faker.random.number(),
        id: faker.random.number(),
        rendered: `<p>${faker.lorem.paragraphs()}</p>`,
        reply_count: faker.random.number(),
        timestamp: faker.date.recent().toString(),
        shares_count: faker.random.number(),
        url: "https://127.0.0.1",
        user_following_author: faker.random.boolean(),
        user_is_author: faker.random.boolean(),
        user_has_shared: faker.random.boolean(),

    })
}

const getFakePostList = function (args = {}, nbPosts = 1) {
    let contents = {}
    let contentIds = []
    for (let n = 0; ++n <= nbPosts;) {
        let post = getFakePost()
        contentIds.push(post.id)
        contents[post.id] = post
    }

    let contentList = _.get(args, ["contentList"], [])
    for (let n = 0; ++n <= contentList.length;) {
        contentIds.push(contentList[n].id)
        contents[contentList[n].id] = contentList[n]
    }

    return {contents, contentIds}
}

const getContext = function (args = {}) {
    return _.defaults({}, args, {
        currentBrowsingProfileId: faker.random.number(),
        streamName: "public",
        isUserAuthenticated: faker.random.boolean(),
    })
}

export {getFakeAuthor, getFakePost, getContext}
