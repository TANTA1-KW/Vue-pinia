<script setup>
import { useBookStore } from '../stores/book'
import { RouterLink } from 'vue-router'

const bookStore = useBookStore()

const Delete = (index) => {
    console.log('Delete')
    bookStore.removebook(index)
    
}
</script>

<template>
    Book List View
    <div>
        <ul>
            <li v-for="(book, index) in bookStore.book">
                {{ index + 1 }}. {{ book.bookname }} by {{ book.author }}
                <RouterLink :to="{ name: 'book-edit', params: { id : index } }">
                    <button>Edit</button>
                </RouterLink>
                <button @click="Delete(index)">Delete</button>
            </li>
        </ul>
    </div>
    <RouterLink :to="{ name: 'book-create' }">
        Create Book
    </RouterLink>
</template>