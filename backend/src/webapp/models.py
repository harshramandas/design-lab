from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.
import datetime
User = get_user_model()


class Doctor(models.Model):
	name = models.CharField(verbose_name="name",max_length=100, default="NA")
	details = models.TextField(verbose_name="details", default="NA")

	def __str__(self):
		return "{ 'id' : '" + str(self.id) + "' , 'name' : '" + str(self.name) + "', 'details' : '" + str(self.details) + "' }"

class Patient(models.Model):
	name = models.CharField(verbose_name="name",max_length=100, default="NA")
	address = models.TextField(verbose_name="address", max_length=500, default="NA")
	contact = models.CharField(verbose_name="contact",max_length=20, default="NA")
	bed = models.IntegerField(verbose_name="bed",default=0)
	doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
	emergency = models.CharField(verbose_name="emergency",max_length=3, default="n")
	def __str__(self):
		return "{ 'id' : '" + str(self.id) + "' , 'name' : '" + str(self.name)  + "' }"


class Billing(models.Model):
	name = models.CharField(verbose_name="name",max_length=100, default="NA")
	address = models.TextField(verbose_name="address", max_length=500, default="NA")
	details = models.TextField(verbose_name="details", default="NA")
	amount = models.IntegerField(verbose_name="amount",default=0)
	owner = models.ForeignKey(Patient, on_delete=models.CASCADE)
	def __str__(self):
		return "{ 'id' : '" + str(self.id)+ "' , 'owner' : '" + str(self.owner) + "' , 'name' : '" + str(self.name) + "', 'details' : '" + str(self.details) + "', 'address' : '" + str(self.address) + "' }"

class Released(models.Model):
	previous_block_hash = models.TextField(verbose_name="previous", default="NA")
	timestamp = models.DateTimeField(verbose_name="timestamp", default=datetime.datetime.now())
	current_hash = models.TextField(verbose_name="current", default="NA")
	name = models.CharField(verbose_name="name",max_length=100, default="NA")
	address = models.TextField(verbose_name="address", max_length=500, default="NA")
	contact = models.CharField(verbose_name="contact",max_length=20, default="NA")
	bed = models.IntegerField(verbose_name="bed",default=0)
	doctor = models.TextField(verbose_name="doctor", default="NA")
	emergency = models.CharField(verbose_name="emergency",max_length=3, default="n")
	deceased = models.CharField(verbose_name="deceased",max_length=3, default="n")
	billings = models.TextField(verbose_name="billings", max_length=500, default="NA")
	def __str__(self):
		return "{ 'hash' : '" + str(self.current_hash) + "' , 'name' : '" + str(self.name)  + "' }"
	class Meta:
		get_latest_by = 'timestamp'