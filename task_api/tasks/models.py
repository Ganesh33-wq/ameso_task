from django.db import models

class Task(models.Model):
    Taskname = models.CharField(max_length=255)
    Description = models.TextField()
    Completed = models.CharField(default=False,max_length=100,null=True)
    Startdate = models.DateField(null=True)
    Enddate = models.DateField(null=True)
    taskcreated_at = models.DateTimeField(auto_now_add=True)


