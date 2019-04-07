<template>
    <div class="formAndTitle">
        <div class="formTitle">Commentaires</div>
        <div class="formCard">
            <form>
                <input type="text" name="titleForm" value="" placeholder="Titre..." class="inputTitle">
                <input type="textarea" name="commentForm" value="" placeholder="Ajouter un commentaire..." class="inputText">
                <div class="formBtn">
                    <Btn :text="'AJOUTER LE COMMENTAIRE'"/>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Btn from '../btn/Btn.vue'
export default {
    name:'Form',
    components:{
        Btn,
    } 
}
</script>

<style scoped>
    .formAndTitle {
        margin: 10% 0 10% 0;
        display: flex;
        flex-direction: column;
    }
    .formTitle {
        font-size: 25px;
        margin-bottom: 15px;
        color: #a6a6a6;
    }
    form {
        display: flex;
        flex-direction: column;
        background-color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
    }
    input {
        width: 700px;
        margin: 20px 0 0 20px;
        padding: 5px 0 0 10px;
        font-weight: bold;
        font-size: 14px;
    }
    .inputTitle {
        height: 50px;
    }
    .inputText {
        height: 130px;
    }
    .formBtn {
        text-align: right;
        padding: 20px 42px 15px 0;;
        
    }
    button {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
        letter-spacing: 0px;
        padding: 10px;
    }
</style>