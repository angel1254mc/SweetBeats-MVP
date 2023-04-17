# Create vectors for each of the t-tests we intend to conduct.
# These will correspond to time and error metrics for designs A, and B, for each task (including the overall usability task)

# Task times should be in seconds or minutes accross all tasks

designATask1Time <- c(30, 15, 36, 38, 14, 19)
designBTask1Time <- c(20, 14, 48, 57, 26, 20)

designATask2Time <- c(33, 55, 24, 42, 36, 37)
designBTask2Time <- c(83, 85, 20, 92, 44, 20)

designATask3Time <- c(12, 25, 34, 17, 18, 16)
designBTask3Time <- c(15, 8, 10, 29, 25, 20)

designATaskOverallTime <- c(93, 95, 46, 32, 46, 30)
designBTaskOverallTime <- c(83, 117, 86, 93, 54, 20)

designATask1Errors <- c(1, 0, 2, 1, 0, 1)
designBTask1Errors <- c(1, 0, 2, 1, 1, 0)

designATask2Errors <- c(3, 1, 1, 0, 0, 0)
designBTask2Errors <- c(4, 2, 0, 2, 0, 0)

designATask3Errors <- c(0, 0, 0, 0, 0, 0)
designBTask3Errors <- c(0, 0, 0, 0, 0, 0)

designATaskOverallErrors <- c(0, 0, 0, 0, 0, 0)
designBTaskOverallErrors <- c(0, 0, 1, 0, 0, 0)

designAExperience <- c(1, 2, 2, 1, 2, 1)
designBExperience <- c(2, 1, 1, 1, 3, 0)

designAFun <- c(4, 4, 4, 2, 5, 4)
designBFun <- c(5, 5, 5, 5, 5, 0)

designAUsefulness <- c(3, 3, 3, 1, 3, 4)
designBUsefulness <- c(4, 2, 4, 5, 3, 0)


designAUsabilityTestResults <- c(95, 87.5, 77.5, 72.5, 90, 85)
designBUsabilityTestResults <- c(72.5, 85, 92.5, 85, 70, 70)
# These might be a useful set of data points in order to compare if there
# was a significant change in the usability of the system
# after implementing our changes.
# At least on my tests (Angel), I could see participants
# reported a significantly higher usability test score than previously
# Right now this array has the scores for the 4 usability tests I conducted in user test 1
# It's missing 2 more from Jacob's tests in order to compare 6 old datapoint / 6 new dataponts

pastUsabilityScaleResults <- c(32.5, 62.5, 42.5, 55.5, 62.5, 70)

# Perform t-test for task 1 time
t_test_task_1_time <- t.test(designATask1Time, designBTask1Time)

# Perform t-test for task 2 time
t_test_task_2_time <- t.test(designATask2Time, designBTask2Time)

# Perform t-test for task 3 time
t_test_task_3_time <- t.test(designATask3Time, designBTask3Time)

# Perform t-test for overabll usability time
t_test_overall_task_time <- t.test(designATaskOverallTime, designBTaskOverallTime)

# Perform t-test for task 1 errors
t_test_task_1_err <- t.test(designATask1Errors, designBTask1Errors)

# Perform t-test for task 2 errors
t_test_task_2_err <- t.test(designATask2Errors, designBTask2Errors)

# Perform t-test for task 3 errors
t_test_task_3_err <- t.test(designATask3Errors, designBTask3Errors)

# Perform t-test for overall task errors
t_test_task_4_err <- t.test(designATaskOverallErrors, designBTaskOverallErrors)

# Perform t-test for self-reported experience required
t_test_experience <- t.test(designAExperience, designBExperience)

# Perform t-test for self-reported program fun
t_test_fun <- t.test(designAFun, designBFun)

# Perform t-test for self-reported program usefulness
t_test_usefulness <- t.test(designAUsefulness, designBUsefulness)




boxplot(designATask1Time,designBTask1Time, col=c(rgb(0.1,0.1,0.7,0.5), rgb(0.1,0.1,0.7,0.5)), xlab="SweetBeats Design",main="Task 1 Completion Times vs. Design", ylab="Completion Time (seconds)", names=c("Design A", "Design B"))
boxplot(designATask2Time,designBTask2Time, col=c(rgb(0.1,0.1,0.7,0.5), rgb(0.1,0.1,0.7,0.5)), xlab="SweetBeats Design",main="Task 2 Completion Times vs. Design", ylab="Completion Time (seconds)", names=c("Design A", "Design B"))
boxplot(designATask3Time,designBTask3Time, col=c(rgb(0.1,0.1,0.7,0.5), rgb(0.1,0.1,0.7,0.5)), xlab="SweetBeats Design",main="Task 3 Completion Times vs. Design", ylab="Completion Time (seconds)", names=c("Design A", "Design B"))

errCountA <- sum(c(designATask1Errors, designATask2Errors, designATask3Errors))
errCountB <- sum(c(designBTask1Errors, designBTask2Errors, designBTask3Errors))

barplot(cbind(errCountA, errCountB), col=c(rgb(0.1,0.1,0.7,0.5), rgb(0.1,0.1,0.7,0.5)), ylab="Error Count", xlab="Design", names=c("Design A", "Design B"))



print(t_test_task_1_time)
print(t_test_task_2_time)
print(t_test_task_3_time)
print(t_test_overall_task_time)
print(t_test_task_1_err)
print(t_test_task_2_err)
print(t_test_task_3_err)
print(t_test_task_4_err)
print(t_test_experience)
print(t_test_fun)
print(t_test_usefulness)

