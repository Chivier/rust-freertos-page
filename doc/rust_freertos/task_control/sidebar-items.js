initSidebarItems({"enum":[["task_state",""],["updated_top_priority",""]],"fn":[["add_current_task_to_delayed_list",""],["reset_next_task_unblock_time",""],["resume_task","INCLUDE_vTaskSuspend must be defined as 1 for this function to be available.  See the configuration section for more information."],["suspend_task","INCLUDE_vTaskSuspend must be defined as 1 for this function to be available.  See the configuration section for more information."],["task_delete","INCLUDE_vTaskDelete must be defined as 1 for this function to be available.  See the configuration section for more information."],["task_is_tasksuspended",""]],"struct":[["TaskHandle","Type by which tasks are referenced.  For example, a call to xTaskCreate  returns (via a pointer parameter) an TaskHandle_t variable that can then  be used as a parameter to vTaskDelete to delete the task.  Since multiple `TaskHandle`s may refer to and own a same TCB at a time,  we wrapped TCB within a `tuple struct` using `Arc<RwLock<_>>`"],["task_control_block",""]],"type":[["TCB",""],["Task",""]]});