<template>
    <div class="relative container mx-auto overflow-x-auto py-10">

        <div class="mb-4">
            <input type="text" v-model="search" placeholder="Search by product name, color, or category"
                class="w-full px-4 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500">
        </div>

        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th v-for="(v, k) in headers" :key="k" scope="col" class="px-6 py-3 text-center">
                        {{ v.text }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(v, k) in filteredUsers" :key="k"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ k + 1 }}
                    </td>
                    <td class="px-6 py-4">
                        {{ v.title }}
                    </td>
                    <td class="px-6 py-4">
                        {{ v.author }}
                    </td>
                    <td class="px-6 py-4">
                        {{ v.publisher }}
                    </td>
                    <td class="px-6 py-4">
                        {{ v.publication_date }}
                    </td>
                    <td class="px-6 py-4">
                        {{ v.genre }}
                    </td>
                    <td class="px-6 py-4">
                        {{ v.price }}
                    </td>
                    <td class="px-6 py-4">
                        {{ v.quantity }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            headers: [
                { text: 'no', value: '' },
                { text: 'title', value: 'title' },
                { text: 'author', value: 'author' },
                { text: 'publisher', value: 'publisher' },
                { text: 'publication_date', value: 'publication_date' },
                { text: 'genre', value: 'genre' },
                { text: 'price', value: 'price' },
                { text: 'quantity', value: 'quantity' }
            ],
            users: [],
            search: '',
        };
    },
    async mounted() {
        const response = await this.$gorilla('/');
        this.users = response.data.data;
        console.log(response);
    },
    computed: {
        filteredUsers() {
            if (this.search === '') return this.users;
            else {
                return this.users.filter(user => {
                    return Object.keys(user).some(key => {
                        if (key === 'title') {
                            return String(user[key]).toLowerCase().includes(this.search.toLowerCase());
                        }
                    });
                });
            }
        }
    },
};

</script>
  