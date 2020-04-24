ViewModel is 

Basic ViewModel can be created by extending the ViewModel class.
```kotlin
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class MyViewModel: ViewModel(){

     private val _data =  MutableLiveData<String>().apply {
        value = "Initial value"
    }

    val data: LiveData<String> = _data

    fun updateData(){
        // here we update the private data
    }
}
```
So what are we doing here. Let's try to understand line by line. First 3 lines are importing the necessary classes. The next line creates a new class *MyViewModel* by extending *ViewModel* class. Then we define a private data which is mutable. The reason behind making it private is that we don't want it to be changed by any of its observers. Then we have another variable that is accessible to the observers. Finally, we have a public function that can be called to update the data in the view model.