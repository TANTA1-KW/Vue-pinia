
<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useBookStore } from '../stores/book'

const bookStore = useBookStore()
const router = useRouter()
const route = useRoute()

const book = reactive({
    bookname: '',
    author: '',
})

const mode = ref('create')
const bookIndex = ref(-1)

onMounted(() => {
    if (route.name === 'book-edit') {
        mode.value = 'update'
        bookIndex.value = parseInt(route.params.id)
        const cbook = bookStore.book[bookIndex.value]
        book.bookname = cbook.bookname
        book.author = cbook.author
    }
})

const addBook = () => {
    // console.log(book)
    if (mode.value === 'update'){
        bookStore.editBook(book, bookIndex.value)
    } else {    
        bookStore.addBook(book)
    }
    router.push({ name: 'book-list' })
}

const disButton = computed(() => {
    if (mode.value === 'create') {
        return 'Add'
    } else {
        return 'Update'
    }
}) 
</script>

<template>
    <div>
        Book Update View
    </div>
    <div>
        Book Name
        <input type="text" v-model="book.bookname"> 
    </div>
    <div>
        Author
        <input type="text" v-model="book.author">
    </div>
    <div>
        <button @click="addBook()">{{ disButton }}</button>
    </div>
</template>