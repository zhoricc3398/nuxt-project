<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: '1',
            title: 'First Post',
            previewText: 'This is our first post!',
            thumbnail:
              'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg'
          },
          {
            id: '2',
            title: 'Second Post',
            previewText: 'This is our second post!',
            thumbnail:
              'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg'
          }
        ]
      })
    }, 1500)
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
