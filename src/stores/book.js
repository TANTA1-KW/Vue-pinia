import { defineStore } from "pinia";

export const useBookStore = defineStore('book', {
    state: () => ({
        book: []
    }),
    actions: {
        addBook (book) {
            this.book.push(book)
        },
        removebook (index) {
            this.book.splice(index, 1)
        },
        editBook (book, index) {
            this.book.splice(index, 1, book)
        }
    }
})