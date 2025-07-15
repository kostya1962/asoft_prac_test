<script setup>
    import { reactive, computed, ref, watch } from 'vue';
    const habit = reactive({});
    
    const sum = computed(() => habit.count * habit.frequency); 
    const label = ref();

watch(() => { return {name: habit.name, description: habit.description} }, (newVal) => {
        label.value = `${newVal.name} ${newVal.description}`;
    }, {deep: true, immediate: true});
</script>
<template>
    <div class="container">
            <form>
                <br>
                    <h1>Трекер привычек</h1>
                    {{ label }}
                    <br>
                        <div>
                            <label for="habit-name">Название привычки</label>
                            <input v-model.trim="habit.name" id="habit-name" required></input>
                        </div>
                    </br>
                    <br>
                        <div>
                            <label for="description">Описание привычки</label>
                            <textarea v-model.trim="habit.description" id="description" required></textarea>
                        </div>
                    </br>
                    <br>
                        <div>
                            <label for="frequency">Частота выполнения</label>
                            <select v-model="habit.frequency" id="frequency">
                                <option :value="1">Каждый день</option>
                                <option :value="7">Раз в неделю</option>
                                <option :value="30">Раз в месяц</option>
                            </select>
                        </div>
                    </br>
                    <br>
                        <div>
                            <label for="count">Количество повторений</label>
                            <input v-model.number="habit.count" id="count" type="number"></input>
                        </div>
                    </br>
                    <br>
                        <div>Общее количество выполнения <span id="sum"></span> {{ sum }}</div>
                    </br>
                    <br>
                        <button type="submit" id="formel">Сохранение</button>
                        <button type="button">Необязательная кнопка</button>
                    </br>
                </br>
            </form>
        </div>
</template>