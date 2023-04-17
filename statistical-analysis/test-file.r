# Create vectors for each of the t-tests we intend to conduct.
# These will correspond to time and error metrics for designs A, and B, for each task (including the overall usability task)

# Task times should be in seconds or minutes accross all tasks

designATask1Time <- c(36, 38)
designBTask1Time <- c(57, 26)

designATask2Time <- c(24, 42)
designBTask2Time <- c(92, 44)

designATask3Time <- c(34, 17)
designBTask3Time <- c(29, 25)

designATaskOverallTime <- c(46, 32)
designBTaskOverallTime <- c(93, 54)

designATask1Errors <- c(2, 1)
designBTask1Errors <- c(1, 1)

designATask2Errors <- c(1, 0)
designBTask2Errors <- c(2, 0)

designATask3Errors <- c(0, 0)
designBTask3Errors <- c(0, 0)

designATaskOverallErrors <- c(0, 0)
designBTaskOverallErrors <- c(0, 0)

designAUsabilityTestResults <- c(77.5, 72.5)
designBUsabilityTestResults <- c(85, 70)
# These might be a useful set of data points in order to compare if there
# was a significant change in the usability of the system
# after implementing our changes.
# At least on my tests (Angel), I could see participants
# reported a significantly higher usability test score than previously
# Right now this array has the scores for the 4 usability tests I conducted in user test 1
# It's missing 2 more from Jacob's tests in order to compare 6 old datapoint / 6 new dataponts

pastUsabilityScaleResults <- c(32.5, 62.5, 42.5, 55.5)

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

boxplot(designATask1Time,designBTask1Time, xlab="SweetBeats Design", ylab="Error Count", names=c("Design A", "Design B"))
boxplot(designATask2Time,designBTask2Time, xlab="SweetBeats Design", ylab="Error Count", names=c("Design A", "Design B"))
boxplot(designATask3Time,designBTask3Time, xlab="SweetBeats Design", ylab="Error Count", names=c("Design A", "Design B"))

errCountA <- sum(c(designATask1Errors, designATask2Errors, designATask3Errors))
errCountB <- sum(c(designBTask1Errors, designBTask2Errors, designBTask3Errors))

barplot(cbind(errCountA, errCountB))