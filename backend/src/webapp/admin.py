from django.contrib import admin
from webapp.models import Doctor, Patient, Billing, Released
# Register your models here.
admin.site.register(Doctor)
admin.site.register(Patient)
admin.site.register(Billing)
admin.site.register(Released)